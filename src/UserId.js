import { useParams } from "react-router-dom";

function UserId(params) {
    let {userName} = useParams();
    return (
        <div>
            <a href="/users">Назад</a>
            <h1>User: { userName}</h1>
            {/* <a href="/users">Иванов</a>
            <a href="/users">Петров</a>
            <a href="/users">Сидоров</a> */}
        </div>
    )
    
}
export default UserId;