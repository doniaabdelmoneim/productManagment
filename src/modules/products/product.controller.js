import db from "../../../db/dbConnection.js"

//ADD PROUDCT
export const addProduct=(req,res)=>{
    const{name,price,taxes,ads,discount,category}=req.body
    db.execute(`insert into products (name,price,taxes,ads,discount,category)
    values('${name}',${price},${taxes},${ads},${discount},'${category}')`,(err,result)=>{
        if(err){
            return res.status(500).json({ msg:"query error",err})
            }
        if (!result.affectedRows){
            return res.status(500).json({ msg:"product not added"})
        }   
        db.execute(`UPDATE products
            SET total = price + ads + taxes - discount `,(err,result)=>{
            return res.status(200).json({ msg:"product added"})})
        })
    }

// GET PRODUCT 
export const getProducts=(req,res)=>{
    db.execute(`select * from products`,(err,result)=>{
        if(err){
            return res.status(500).json({ msg:"query error",err})
        }
        return res.status(200).json({products:result})
    })
}

// UPDATE PRODUCT 

export const updateProduct=(req,res)=>{
    const{name,price,taxes,ads,discount,category,id,total}=req.body
    db.execute(`update products set name='${name}',price=${price},taxes=${taxes},ads=${ads},discount=${discount},category='${category}' where id='${id}'`,(err,result)=>{
        if(err){
            return res.status(500).json({ msg:"query error",err})
        }
        if (!result.affectedRows){
            return res.status(500).json({ msg:"product not updated"})
        }   
        db.execute(`UPDATE products
            SET total = price + ads + taxes - discount `,(err,result)=>{
            return res.status(200).json({ msg:"product updated"})
        })
        })
    }

    // DELETE PRODUCT 

export const deleteProduct=(req,res)=>{
    const{id}=req.body
    db.execute(`delete from products where id='${id}'`,(err,result)=>{
        if(err){
            return res.status(500).json({ msg:"query error",err})
        }
        if (!result.affectedRows){
            return res.status(500).json({ msg:"product not deleted"})
        }   
        return res.status(200).json({ msg:"product deleted"})
        })
}

