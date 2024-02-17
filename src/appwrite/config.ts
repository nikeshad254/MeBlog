import conf from "../conf/conf";
import { Databases, Storage, Query, Client, ID } from "appwrite";
import { TAppwritePost } from "../types";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId,
  }: TAppwritePost) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      throw err;
    }
  }

  async updatePost(
    slug: string,
    { title, content, featuredImage, status }: TAppwritePost
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (err) {
      throw err;
    }
  }

  async deletePost(slug: string) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (err) {
      throw err;
    }
  }

  async getPost(slug: string) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (err) {
      // console.log("Appwrite service :: getPost :: error", err);
      return false;
    }
  }

  async getPosts(queries: Array<string> = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (err) {
      // console.log("Appwrite service :: getPosts :: error", err);
      return false;
    }
  }

  // file upload and delete service
  async uploadFile(file: File) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (err) {
      // console.log("Appwrite service :: uploadFile :: error", err);
      return false;
    }
  }

  async deleteFile(fileId: string) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (err) {
      // console.log("Appwrite service :: deleteFile :: error", err);
      return false;
    }
  }

  getFilePreview(fileId: string) {
    // console.log(fileId);
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
