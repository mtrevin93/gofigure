import React, { useContext, useEffect } from "react"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const Post = ({savedFig}) => {
    
    const { parts, getParts } = useContext(CollectionContext)

    useEffect(() => {
        getParts()
    }, [])

return (
    <>
    <section class="section header">
        <div class="title">
            {savedFig?.collectionId === 0? `Check out "${savedFig?.name}" Added by ${savedFig?.user.name}`:
            `${savedFig?.user?.name} added "${savedFig?.name}" to "${savedFig?.collection?.name}"`}
        </div>
    </section>
    <section class="section">
    {savedFig.img? 
    <div class="">
        <img class = "image is-3by-4" src={savedFig.img}/>
    </div>
    : 
    <div class="">
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headwearId)?.img}/>
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.torsoId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.legsId)?.img}/>
    </div>}
    </section>
    </>
)}  