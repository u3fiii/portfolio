// src/contentful.ts
import axios from "axios";

// Define the BlogPost interface
export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    featuredImage: {
      sys: {
        id: string; // Asset ID
      };
    };
    // Add other fields as necessary
  };
}

// Define the Asset interface
export interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string; // Image URL
      title: string; // Image title
    };
    description: string; // Image description
  };
}

const SPACE_ID = "jugyivcx5l5y";
const ACCESS_TOKEN = "7mSfvcEs9N6bMnUmceOhiMFOPIBhK_uGfI0eDrjD17E";
const ENVIRONMENT_ID = "master-2024-09-09"; // Your environment ID
const CONTENT_TYPE = "pageBlogPost"; // Your content type ID

// Create a function to fetch blog posts
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get(
    `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`
  );

  return response.data.items; // Return the items from the response
};

// Create a function to fetch an asset by ID
export const fetchAsset = async (assetId: string): Promise<Asset> => {
  const response = await axios.get(
    `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/assets/${assetId}?access_token=${ACCESS_TOKEN}`
  );

  return response.data; // Return the asset data
};
