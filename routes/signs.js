import { Router } from 'express'
import * as signsCtrl from '../controllers/signs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, signsCtrl.create)
router.get('/', checkAuth, signsCtrl.index)
router.get('/:id', checkAuth, signsCtrl.show)
router.put('/:id',checkAuth, signsCtrl.update)
router.delete('/:id', checkAuth, signsCtrl.delete)



export { router }