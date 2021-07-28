import React, { useContext, useEffect, useState } from "react"
import { BrickContext } from "./BrickProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { Link } from "react-router-dom"

export const SearchCard = ({ minifig, types }) => {

const { getFigNum, figNum, setFigNum  } = useContext(BrickContext)
const { parts, getParts } = useContext(CollectionContext)

useEffect(() => {
    getParts()
},[])

const getFigParts = () => {
        getFigNum(minifig.set_num).then((res) => {res.results.map(piece => {
        types.find(type => (piece.part.part_cat_id === type.id))
        const part = {
            "userId": parseInt(sessionStorage.getItem("GoFigure_user")),
            "rebrickableId": piece.part_num,
            "typeId":types.find(type => piece.part.part_cat_id===type.rebrickableId).id,
            "img": piece.part.part_img_url,
            "name": piece.part.name
        }
        if(parts.find(() => part.userId === parseInt(sessionStorage.getItem("GoFigure_user"))) && part.rebrickableId === piece.part_num){
            console.log("Part already in user inventory")
        }
        else{
        return fetch("http://localhost:8088/parts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(part)
            })
        }})})
        .then(getParts)
}

const handleClickAddAllParts = () => {
    console.log(types)
    getFigParts()
}

return (
    <>
    <div class="column is-3 my-2">
        <figure class="image is-square">
            <img src={minifig.set_img_url}/>
        </figure>
        <div class="subtitle my-1">{minifig.name}</div>
    </div>
    <div class="column is-1 my-2">
        <button class="button is-success mt-6" onClick={event => {
            event.preventDefault()
            handleClickAddAllParts()
        }}>
            Add Parts
        </button>
        {/* Button-for detail page to add piece by specific part
        <button class="button is-info my-6">
            <Link
            minifig={minifig}to={
                `/search/detail/${minifig.set_num}`
            }
            >
            <text class="is-white">Details</text>
            </Link>
        </button> */}
    </div>
    </>
)
}