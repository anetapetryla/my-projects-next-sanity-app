import { createClient } from "next-sanity";

const config = {
    projectId: '9yt1o9dp',
    dataset: 'production',
    apiVersion: '2024-03-07',
    useCdn: true
};

const client = createClient(config);
export default client;