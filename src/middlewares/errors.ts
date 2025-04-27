import { Response, NextFunction } from 'express'
import { error } from '../config'

export const errorHandler = (err: any, res: Response, next: NextFunction) => {
    error(err.message || 'Something went wrong')
    res.status(err.status || 500).json({ status: "error", message: err.message || 'Something went wrong' })
}