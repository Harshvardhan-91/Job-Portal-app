import {Company} from "../models/company.model.js"; 

export const registerCompany = async (req, res) => {
    try {
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message: "Company name is required",
                success: false,
            });
        }
        let Company = await Company.findOne({name: companyName});
        if(Company){
            return res.status(400).json({
                message: "Company already exists",
                success: false,
            });
        }
        Company = await Company.create({
            name: companyName,
            userId: req.id,
        });
        return res.status(201).json({
            message: "Company created successfully",
            Company,
            success: true,
        }); 
        
    } catch (error) {
        console.log(error);
    }

};
export const getCompany = async (req, res) => {
    try {
         const{name,description,website,location} = req.body;
         const file = req.file;

         //cloudinarty upload

         const updateData = {name,description,website,location}

         const company = await Company.findByIdAndUpdate
    } catch (error) {
        console.log(error);
    }
}