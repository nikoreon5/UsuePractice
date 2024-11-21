import React from 'react';

const UserPhoto = ({ userPhotoLink, openPhotoInNewTab, onError }) => {
    return (
        <img
            onClick={() => openPhotoInNewTab(userPhotoLink)}
            src={userPhotoLink}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = process.env.PUBLIC_URL + '/nophoto.png';
                onError(); // вызов onError для удаления из таблицы
            }}
        />
    );
};

export default UserPhoto;
