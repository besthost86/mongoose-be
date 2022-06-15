import parentControler from '../controllers/parentController.js'


export default (homeRouter) => {
        homeRouter.get('/', parentControler.getParent)
        homeRouter.post('/create', parentControler.createParent)
}


