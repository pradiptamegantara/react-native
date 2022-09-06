import { productService } from "./ProductService";
import { loginService } from "./LoginService";

export const serviceFactory = (apiClient) => {
    return {
        productService: productService(),
        loginService: loginService(apiClient)
    }
}