import { ID } from "appwrite";
import { database } from "./appwrite";
import { APPWRITE_DATABASE_ID, APPWRITE_POST_COLLECTION_ID } from "./constants";

// Posts API
export const createPost = async (title, content, imageURL) => {
  try {
    //TODO: Add Create
    // Mock
    const post = {
      title,
      content,
      imageURL,
      createdAt: Date.now(),
    };

    const response = await database.createDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_POST_COLLECTION_ID,
      ID.unique(),
      {
        title: title,
        description: content,
      }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    //TODO: Add Fetch
    // Mock Data

    let promise = await database.listDocuments(
      APPWRITE_DATABASE_ID,
      APPWRITE_POST_COLLECTION_ID
    );

    console.log(promise);
    const data = promise.documents;
    const updatedData = data.map((item) => {
      const { description, ...rest } = item;
      return { content: description, ...rest };
    });
    return updatedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    // TODO: Add Delete

    let promise = await database.deleteDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_POST_COLLECTION_ID,
      postId
    );

    return promise;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const uploadImage = async (file) => {
  try {
    //TODO: Add Upload
    // Mock
    return "https://via.placeholder.com/150";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Comments API
export const createComment = async (postId, content, userId) => {
  try {
    // TODO: Create Comment
    // Mock
    const comment = {
      postId,
      content,
      userId,
      createdAt: Date.now(),
    };
    return comment;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchComments = async (postId) => {
  try {
    // TODO: Fetch Comments
    // Mock Data
    return [
      {
        content: "Comment 1",
        userId: "user1",
        createdAt: Date.now(),
      },
      {
        content: "Comment 2",
        userId: "user2",
        createdAt: Date.now(),
      },
    ];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFilePreviewURL = (fileId) => {
  throw new Error("Not implemented");
};
