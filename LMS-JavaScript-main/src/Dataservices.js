import http from "./http-common";
class DataServices{


    getAllUsers(){
        return http.get("/users");
    }
    deleteUser(id){
        return http.delete(`/user/${id}`);
    }
    createUser(id,issuedbooks,pass,penality){
        return http.post(`/user/${id}/${issuedbooks}/${pass}/${penality}`);
    }
    updateUser(id,issuedbooks,pass,penality){
        return http.put(`/user/${id}/${issuedbooks}/${pass}/${penality}`);
    }
    findUser(id){
        return http.get(`/user/${id}`);
    }
    
    getAllBooks(){
        return http.get("/books");
    }
    deleteBook(id){
        return http.delete(`/book/${id}`);
    }
    createBook(isbn,title,author,edition,quantity){
        return http.post(`/book/${isbn}/${title}/${author}/${edition}/${quantity}`);
    }
    updateBook(id,title,author,edition,quantity){
        return http.put(`/book/${id}/${title}/${author}/${edition}/${quantity}`);
    }
    findBook(id){
        return http.get(`/book/${id}`);
    }
    getAllIssuedBooks(){
        return http.get("/issuedBooks");
    }
    deleteIssuedBook(id){
        return http.delete(`/issuedBook/${id}`);
    }
    createIssuedBook(isbn,title,author,issuedBy,bookIssued){
        return http.post(`/issuedBook/${isbn}/${title}/${author}/${issuedBy}/${bookIssued}`);
    }
    updateIssuedBook(id,title,author,issuedBy,bookIssued){
        return http.put(`/issuedBooks/${id}/${title}/${author}/${issuedBy}/${bookIssued}`);
    }
    findIssuedBook(id){
        return http.get(`/issuedBooks/${id}`);
    }
    
}

export default new DataServices();