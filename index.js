const Category = require('./category model/category schema');

//add new cetegories

 // post
 app.post ('/category',async (req , res)=>{

    try{
         if (!req.body.name) {

              return res.status(422).json({error: 'name feild is requried'})
         }

         if (!req.body.  description) {

              return res.status(422).json({error: '  description feild is requried'})
         }

        const newcategory = await Category.create(req.body)
        return res.status(201).json(newcategory)
    } catch(error) {
         return res.status(500).json({error: error.message}) 
    }
})

// update category

// put
app.put('/category/:id', async(req,res)=>{
    try{
         if (!mongoose.isValidObjectId(req.params.id)){
              return res.status(422).json({error: 'parameter is not valid id'})
         }

         if (!await Category.exists({_id: req.params.id})){
              return res.status(422).json({error: 'category not found'})
         }
     const categoryupdated = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})

     return res.status(200).json(categoryupdated)

    }catch(error) {
         return res.status(500).json({error: error.message})
    }
})

// delete cetegories


// delete
app.delete('/category/:id', async(req,res)=>{
    try{
         if(!mongoose .isValidObjectId(req.params.id)){
            return res.status(422).json({error: 'parameter is not valid id'})
         }
         await Category.findByIdAndDelete(req.params.id)

         return res.status(204).send()


    }catch(error){
         return res.status(500).json({error: 'error.message'})
    }
})


mongoose.connect ('mongodb://127.0.0.1/crud_node').then(()=>{
    console.log("mongodb connect...");
}).catch((err)=>{
    console.log('mongodb not connect...',err);
});



const PORT = port|| '3012'; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
