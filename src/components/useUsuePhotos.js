import React, {useEffect, useState} from 'react';
import DefInput from "../UI/input/DefInput";
import ButtonPrimary from "../UI/buttons/ButtonPrimary";
import ButtonSuccess from "../UI/buttons/ButtonSuccess";
import UserPhoto from "../UserPhoto";

const FROM_LENGTH = 'Диапазон'
const ONE_VALUE = 'Одно значение'
const SEND = 'Отправить'
const PHOTO_URL_TEMPLATE = 'https://portfolio.usue.ru/public/files/users/UID/avatar.jpeg'
const PHOTO_WIDTH = '200px'
const PHOTO_HEIGHT = '200px'
const useUsuePhotos = () => {
    const [fromLength, setFromLength] = useState(false)
    const [leftRange, setLeftRange] = useState(0)
    const [rightRange, setRightRange] = useState(0)
    const [userId, setUserId] = useState(0)
    const [userPhotoLink, setUserPhotoLink] = useState('')
    const [arrayOfUrls, setArrayOfUrls] = useState([])
    const [showPhotos, setShowPhotos] = useState(false)
    useEffect(() => {
        setUserPhotoLink(PHOTO_URL_TEMPLATE.replace('UID', userId))
    }, [userId, setUserId]);
    const send = () => {
        if (fromLength) {
            const arr= []
            for (let i = leftRange; i <= rightRange; i++) {
                arr.push(PHOTO_URL_TEMPLATE.replace('UID', i))
            }
            setArrayOfUrls(arr)
        }
        setShowPhotos(true)
    }
    const openPhotoInNewTab = url => {
        console.log(url)
        window.open(url)
    }
    const CONTENT = <div className="centered-div">
        <ButtonPrimary
            onClick={() => setFromLength(!fromLength)}
        >{fromLength ? ONE_VALUE : FROM_LENGTH}</ButtonPrimary>
        {fromLength
            ? <div>
                <DefInput
                    placeholder="Левая граница.."
                    type="number"
                    value={leftRange}
                    onChange={e => setLeftRange(e.target.value)}
                />
                <DefInput
                    placeholder="Правая граница.."
                    type="number"
                    value={rightRange}
                    onChange={e => setRightRange(e.target.value)}
                />
            </div>
            : <div>
                <DefInput
                    placeholder="Введите ID.."
                    type="number"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                />
            </div>
        }
        <ButtonSuccess
            onClick={send}
        >{SEND}</ButtonSuccess>
        {showPhotos &&
            <div className="centered-div">
                {fromLength
                    ? <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>userId</th>
                                    <th>Photo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrayOfUrls.map((url, index) => {
                                    return <tr>
                                        <td>{index}</td>
                                        <td>
                                            <UserPhoto
                                                key={index}
                                                PHOTO_WIDTH={PHOTO_WIDTH}
                                                PHOTO_HEIGHT={PHOTO_HEIGHT}
                                                openPhotoInNewTab={openPhotoInNewTab}
                                                userPhotoLink={url}
                                            />
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    : <UserPhoto
                        PHOTO_WIDTH={PHOTO_WIDTH}
                        PHOTO_HEIGHT={PHOTO_HEIGHT}
                        openPhotoInNewTab={openPhotoInNewTab}
                        userPhotoLink={userPhotoLink}
                    />
                }
            </div>
        }
    </div>
    return {
        CONTENT: CONTENT
    }
};

export default useUsuePhotos;