import { Router } from 'express'
import * as fortunesCtrl from '../controllers/fortunes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========
router.get('/', fortunesCtrl.index)



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/' , checkAuth, fortunesCtrl.create)
router.get('/:id', checkAuth, fortunesCtrl.show)
router.put('/:id', checkAuth, fortunesCtrl.update)
router.delete('/:id' , checkAuth, fortunesCtrl.delete)


export { router }