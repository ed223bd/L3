import express from 'express'
import { weatherRouter } from './weatherRouter.js'

export const router = express.Router()

router.use('/', weatherRouter)