import { cn } from "@/lib/utils";

 const Title=({children,className}:{children:React.ReactNode,className?:string;})=>{
    return( <h2 className={cn("text-3xl font-bold text-(--color-shop_dark_purple) capitalize tracking-wide fontsans", className)}>{children}</h2>
 );
};

export { Title };