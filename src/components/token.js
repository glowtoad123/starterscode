import React from 'react'

export default function getToken(){
    return document.cookie.slice(6, document.cookie.length)
}