import {homeController} from '../controllers/homeController.js'


export default (homeRouter) => {
        homeRouter.get('/', homeController)
}


