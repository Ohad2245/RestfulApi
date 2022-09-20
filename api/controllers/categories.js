module.exports = {
    getAllCategories: (req,res) =>{
        res.status(200).json({
            message:'Get All Categories'
        })
    },
    createCategory:(req,res) => {
        res.status(200).json({ 
            message:'Create a new Category'
        })
    },
    updateCategory:(req,res) => {
        const articleId = req.params.articleId
    
        res.status(200).json({ 
            message:`Update Category - ${articleId} `
        })
    },
    deleteCategory :(req,res) => {
        const articleId = req.params.articleId
    
        res.status(200).json({ 
            message:`Delete Category - ${articleId} `
        })
    }
}