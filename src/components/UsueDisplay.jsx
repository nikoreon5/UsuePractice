import React, { useEffect, useState } from 'react';
import DefInput from "./UI/input/DefInput";
import ButtonPrimary from "./UI/buttons/ButtonPrimary";
import ButtonSuccess from "./UI/buttons/ButtonSuccess";
import UsueTable from "./UsueTable";

const FROM_LENGTH = 'Диапазон';
const ONE_VALUE = 'Одно значение';
const LEFT_RANGE = 'Левая граница..';
const RIGHT_RANGE = 'Правая граница..';
const ENTER_UID = 'Введите UID..';
const SEND = 'Отправить';
const PHOTO_URL_TEMPLATE = 'https://portfolio.usue.ru/public/files/users/UID/avatar.jpeg';

const UsueDisplay = ({ title }) => {
    const [fromLength, setFromLength] = useState(false);
    const [leftRange, setLeftRange] = useState('');
    const [rightRange, setRightRange] = useState('');
    const [userId, setUserId] = useState('');
    const [userPhotoLink, setUserPhotoLink] = useState('');
    const [arrayOfUrls, setArrayOfUrls] = useState([]);
    const [showPhotos, setShowPhotos] = useState(false);
    const showUsersFIO = true;
    useEffect(() => {
        setUserPhotoLink(PHOTO_URL_TEMPLATE.replace('UID', userId));
    }, [userId]);

    useEffect(() => {
        setShowPhotos(false);
    }, [fromLength]);

    const send = () => {
        const arr = [];
        if (fromLength) {
            for (let i = leftRange; i <= rightRange; i++) {
                arr.push({
                    url: PHOTO_URL_TEMPLATE.replace('UID', i),
                    UID: i.toString()
                });
            }
        } else {
            arr.push({
                url: userPhotoLink,
                UID: userId
            });
        }
        setArrayOfUrls(arr);
        setShowPhotos(true);
    };

    const openPhotoInNewTab = url => {
        window.open(url);
    };

    return (
        <div className="centered-div">
            <h1>{title}</h1>
            <ButtonPrimary onClick={() => setFromLength(!fromLength)}>
                {fromLength ? ONE_VALUE : FROM_LENGTH}
            </ButtonPrimary>
            {fromLength ? (
                <div>
                    <DefInput
                        placeholder={LEFT_RANGE}
                        min={0}
                        type="number"
                        value={leftRange}
                        onChange={(e) => setLeftRange(e.target.value)}
                    />
                    <DefInput
                        placeholder={RIGHT_RANGE}
                        min={0}
                        type="number"
                        value={rightRange}
                        onChange={(e) => setRightRange(e.target.value)}
                    />
                </div>
            ) : (
                <div>
                    <DefInput
                        placeholder={ENTER_UID}
                        min={0}
                        type="number"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
            )}
            <ButtonSuccess
                onClick={send}
            >{SEND}</ButtonSuccess>
            {showPhotos && (
                <div>
                    <h4>Пользователи с недоступным фото пропущены</h4>
                    <UsueTable
                        arrayOfUrls={arrayOfUrls}
                        openPhotoInNewTab={openPhotoInNewTab}
                        showUsersFIO={showUsersFIO}
                    />
                </div>
            )}
        </div>
    );
};

export default UsueDisplay;
