import { createClient,MicroCMSQueries } from "microcms-js-sdk";

const cliant=createClient({
    serviceDomain:"astro-blog-amane",
    apiKey:"oGOPRSroRRvwEEYWv15ZPnQ2MTKph04BruoY"
});

export const getBlog=async(queries:MicroCMSQueries)=>{
    return await cliant.get({endpoint:"blogs",queries});
};

export const getBlogDetail=async(blogId:string,queries?:MicroCMSQueries)=>{
    return await cliant.getListDetail({endpoint:"blogs",contentId:blogId,queries,});
};