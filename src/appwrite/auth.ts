import conf from "../conf/conf";
import { Account, Client, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }

  async login({ email, password }: { email: string; password: string }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (err) {
      throw err;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      throw err;
    }

    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (err) {
      throw err;
    }
  }
}

const authService = new AuthService();

export default authService;
