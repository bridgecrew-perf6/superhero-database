const express = require('express')
const router = express.Router()
const { contacts: ctrl } = require('../../controllers')
const { ctrlWrapper } = require('../../middlewares/ctrlWrapper')
const { validation } = require('../../middlewares/validation')
const { joiSchema } = require('../../models')

router.get('/', ctrlWrapper(ctrl.listSuperhero))

router.get('/:id', ctrlWrapper(ctrl.getSuperheroById))

router.post('/', validation(joiSchema), ctrlWrapper(ctrl.addSuperhero))

router.delete('/:id', ctrlWrapper(ctrl.removeSuperhero))

router.put(
  '/:Id',
  validation(joiSchema),
  ctrlWrapper(ctrl.updateSuperherotById),
)

module.exports = router
