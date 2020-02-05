import React, { Component } from 'react'

export const Modal = (props) => {
    const showHide = props.crawl ? "modal-display-block" : "modal-display-none"

    return (
        <div className={showHide}>
        </div>
    )
}