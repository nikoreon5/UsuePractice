import {users} from "./db";

export const search = targetId => {
    let left = 0;
    let right = users.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midId = users[mid][1]; // Получаем id из середины массива
        if (midId === targetId) {
            return users[mid]; // Возвращаем массив [ФИО, id], если найдено
        } else if (midId < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null; // Если id не найден
}