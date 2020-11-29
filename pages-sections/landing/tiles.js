import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import BlogCard from "components/BlogCard.js";
import Tile from 'components/Tile.js'


export default function Tiles(props) {
    const useStyles = makeStyles(props.styles);
    const classes = useStyles();
    return (
        <div>
            {/* Tiles */}
            <GridContainer justify='center'>
                <GridItem xs={12} sm={12} md={9}>
                    <div className={classNames(classes.main, classes.mainRaised)} style={{borderRadius: "0px", paddingLeft: '2px', paddingRight: '2px'}}>
                        <GridList cellHeight={300} className={classes.gridList} cols={props.small_device_flag ? 1 : 3} style={{height: '100%', width: '100%'}}>
                            {props.allBlogs.slice(0,5).map((thisBlog, i) => (
                                <GridListTile key={thisBlog.id} cols={1 || 1}>
                                <>
                                    {i%2 === 0 && (<Tile reverse><BlogCard blog={thisBlog} forTile /></Tile>)}
                                    {i%2 !== 0 && (<Tile><BlogCard blog={thisBlog} reverse forTile /></Tile>)}
                                </>
                                </GridListTile>
                            ))}
                            {/* <GridListTile key='instagram_post' cols={1 || 1}>
                                <Tile nopadding>
                                <InstagramPost post={props.instaPost} />
                                </Tile>
                            </GridListTile> */}
                        </GridList>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    );
}
