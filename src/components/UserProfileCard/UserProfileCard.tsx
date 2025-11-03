import React from 'react';
import { type UserProfileCardProps} from '../../types';

export const UserProfileCard : React.FC<UserProfileCardProps> = ({user, showEmail, showRole, onEdit, children})=>{
    return(
        <div>
            <div className= "flex justify-center items-center gap-5 p-4">
                <img className="p-2 w-16 h-16 rounded-full object-cover"src= {user.avatarUrl}></img>
                <div>
                <h2 className="font-bold">{user.name}</h2>
                <p className= "text-gray-600 text-xs py-1">{showEmail?user.email:"No Email provided"}</p>
                <p className= "text-gray-600 text-xs py-1">{showRole?user.role:"No Role provided"}</p>
                </div>        
            </div>
            {onEdit && (<button className="bg-blue-500 px-25 py-1 text-white rounded hover:bg-blue-700" onClick= {()=>{onEdit(user.id)}}>Edit Profile</button>)}
            <div>
                {children}
            </div>
        </div>       
    );
};



