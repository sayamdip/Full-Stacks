import config from "../config/config";
import { Client, Account, ID, Databases, TablesDB, Storage, Query} from 'appwrite';

export class Service{
    client = new Client()
    databases
    bucket
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(title, slug, content, featuredImage, status, userId){
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
            console.log("Appwrite Service :: getCurrentUser :: error", error)
        }
    }

    async updatePost({title, slug, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }

    
        catch(error){
            console.log("Appwrite Service :: updatePost :: error", error)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true
        }
        catch(error){
            console.log("Appwrite Service :: deletePost :: error", error)
            return false
        }

    }

    async getPost(slug){
        return await this.databases.getDocument(
            config.appwriteDatabaseID,
            config.appwriteCollectionID,
            slug
        )
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries,
                100,
                0
            )
        }
        catch(error){
            console.log("Appwrite Service :: getPosts :: error", error)
            return false
        }

    }

    // File Upload Services
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Appwrite Service :: uploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true
        }
        catch(error){
            console.log("Appwrite Service :: deleteFile :: error", error)
            return false
        }
    }

    // File Preview Service
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId
        )
    }
}


const service = new Service()
export default new service()

