import React from "react"
import { Route } from "react-router-dom"
import { BrickProvider } from "./Search/BrickProvider"
import { CollectionProvider } from "./Bricks/CollectionProvider"
import { ProfileProvider } from "./Profile/ProfileProvider"
import { MinifigSearchForm } from "./Search/MinifigSearchForm"
import { SearchDetail } from "./Search/SearchDetail"
import { BrickList } from "./Bricks/BrickList"
import { ProfileList } from "./Profile/ProfileList"
import { PartPicker } from "./Build/PartPicker"
import { FigProvider } from "./Build/FigProvider"
import { FigBuilder } from "./Build/FigBuilder"
import { CollectionForm } from "./Profile/CollectionForm"

export const ApplicationViews = () => {
    return (
        <>
         <Route exact path="/">

         </Route>

        <CollectionProvider>
            <Route path="/bricks">
                <BrickList/>
            </Route>
        </CollectionProvider>
        
        <FigProvider>
        <CollectionProvider>        
            <Route path="/sketch">
                <PartPicker/>
            </Route>
            <Route path="/build">
                <FigBuilder/>
            </Route>
        
        <ProfileProvider>
            <Route path="/profile">
               <ProfileList/> 
            </Route>
            <Route path="/collection">
                <CollectionForm/>
            </Route>

        </ProfileProvider>
        </CollectionProvider>
        </FigProvider>

        <CollectionProvider>
        <BrickProvider>
            <Route exact path="/search">
                <MinifigSearchForm/>
            </Route>
            <Route path="/search/detail/">
                <SearchDetail/>
            </Route>
        </BrickProvider>
        </CollectionProvider>
        </>
    )
}