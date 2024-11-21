import React, { useState } from 'react';
import UserPhoto from "./UserPhoto";
import {search} from "../js/search";

const ALL_USERS_FROM_LENGTH_HAVE_NO_PHOTO = 'Все пользователи из диапазона не имеют фото'
const UsueTable = ({ arrayOfUrls, openPhotoInNewTab, showUsersFIO }) => {
    const [validUrls, setValidUrls] = useState(arrayOfUrls);

    const handleImageError = (uid) => {
        setValidUrls((prevUrls) => prevUrls.filter((user) => user.UID !== uid));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>UID</th>
                    {showUsersFIO && <th>ФИО</th>}
                    <th>Фото</th>
                </tr>
            </thead>
            <tbody>
            {validUrls.length !== 0
                ? validUrls.map((user) => (
                        <tr key={user.UID}>
                            <td>{user.UID}</td>
                            {showUsersFIO &&
                                <td>{search(user.UID)[0].toUpperCase()}</td>
                            }
                            <td className="photo-cell">
                                <UserPhoto
                                    userPhotoLink={user.url}
                                    openPhotoInNewTab={openPhotoInNewTab}
                                    onError={() => handleImageError(user.UID)}
                                />
                            </td>
                        </tr>
                    ))
                : <tr>
                    <td colSpan={3}>{ALL_USERS_FROM_LENGTH_HAVE_NO_PHOTO}</td>
                </tr>
            }
            </tbody>
        </table>
    );
};

export default UsueTable;
