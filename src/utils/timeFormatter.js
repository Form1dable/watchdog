export default function formatTime(timestamp) {
    let hour = Math.floor(timestamp / 3600)
    let minute = Math.floor(timestamp % 3600 / 60)
    let second = Math.floor(timestamp % 3600 % 60)

    return [hour, minute, second]
}

