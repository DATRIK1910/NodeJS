import express from "express";
import homeControllers from "../controllers/homeControllers";
import userController from "../controllers/userController";
import doctorCotrollers from "../controllers/doctorControllers";

let router = express.Router();

let intiWebRouters = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/crud', homeControllers.getCRUD);
    router.post('/post-crud', homeControllers.postCRUD);
    router.get('/get-crud', homeControllers.displayGetCRUD);
    router.get('/edit-crud', homeControllers.getEditCRUD);
    router.post('/put-crud', homeControllers.putCRUD);
    router.get('/delete-crud', homeControllers.deleteCRUD);
    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.get('/api/allcode', userController.getAllCode);

    router.get('/api/top-doctor-home', doctorCotrollers.getTopDoctorHome);


    return app.use("/", router);
}

module.exports = intiWebRouters;