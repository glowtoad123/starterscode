import React from "react"
import { Link } from "gatsby"
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import "./nav.css"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Icon, SvgIcon } from "@material-ui/core";

export default function Nav(props){


    return(
        <nav>
          <Link to="/">
            <HomeIcon color="primary" />
          </Link>
            <LibraryBooksIcon color="primary" />
          <Link to="/enter">
            <ExitToAppIcon color="primary" />
          </Link>

        </nav>
    )
}