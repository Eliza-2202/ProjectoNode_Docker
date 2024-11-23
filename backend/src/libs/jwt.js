import {TOKEN_SECRET} from '../config.js'
import jwt from 'jsonwebtoken'


export function createAccessToken(playload){

    return new Promise((resolve, reject)=>{


        jwt.sign(playload,TOKEN_SECRET,{expiresIn:"1h"},
            (err,token)=>{
                if(err) reject(err)
                resolve(token)
            }
        )
    })

    

}