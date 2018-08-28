import React, { Component } from 'react'
import BlankPiece from './BlankPiece'
import XPiece from './XPiece'
import OPiece from './OPiece'

class Board extends Component {
    render() {
        return (
            <div className="Board">
                <div className="top-row">
                    <OPiece/>
                    <BlankPiece/>
                    <XPiece/>
                </div>
                <div className="mid-row">
                    <BlankPiece/>   
                    <OPiece/>   
                    <BlankPiece/>
                </div>
                <div className="bottom-row">
                    <XPiece/>
                    <BlankPiece/>
                    <XPiece/>
                </div>
            </div>
        )
    }
}

export default Board