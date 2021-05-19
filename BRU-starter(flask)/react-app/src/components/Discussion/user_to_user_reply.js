import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useParams } from 'react-router-dom';
import Moment from "react-moment";
import "moment-timezone";
import defaultImage from '../default_user.jpeg'


const UserReplyPage = ({reply}) => {
    const userReply = useSelector(state => state.oneDiscussion)
    const userId = useSelector(state => state.session.user.id)

    return (
        <div>
            {
                reply.reply?.length === 0 ? <p className="no_replies" >No Replies Yet</p> : reply.reply.map((replies) => (
                    <div className="replies" key={replies.id} >
                        <div className="user_to_user_reply1">
                            <div className="user_to_user_reply">
                                <img src={replies.author_image ? replies.author_image : defaultImage} alt="author_image" className="author_image" />
                                <h4 className="review_author">{replies.author}</h4>
                            </div>
                        <p>{replies.body}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UserReplyPage;
