import { sanityFetch } from "../lib/live";

const getCategoriesQuery = async (quantity?: number) => {
    try {
        const query = quantity
            ? `*[_type == "product" && quantity > 0]{
            ...,
            "productCount": count(*[_type == "product" && references(^._id)])
            }`
            : `*[_type == 'category'] | order(name asc){
                ...,
                "productCount": count(*[_type == "product" && references(^._id)])
            }`;
            const { data } = await sanityFetch({
                query,
                params: quantity ?  { quantity } : {},
            });

    }
    catch(error){
        console.log(error, "error in query",error);
        return [];
    }

}