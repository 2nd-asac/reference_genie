import "./page.css"
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";


const initialJobList = [
    {
        id : 1,
        job : "job1",
        isChecked: false,
    },
    {
        id : 2,
        job : "job2",
        isChecked: false,
    },
    {
        id : 3,
        job : "job3",
        isChecked: false,
    },
    {
        id : 4,
        job : "job4",
        isChecked: false,
    },
    {
        id : 5,
        job : "job5",
        isChecked: false,
    }
]
// redux 설정
// 1. provider : ~~
// 2. store : 
// 3. reducer 
//     3-1. state
//     3-2. action
//         3-2-1. type
//         3-2-2. payload

// redux 사용
// useSelector, useDispatch
function reducer(state = initialJobList, action) {
    
    // action 1. type 2. payload
    const newState = [...state]
    switch(action.type) {
        case "bookmark/add":
            newState[action.payload.id].isChecked = true
    }
    return newState;
}

// action
function addBookmark(id, isChecked) {
    return {
        type:"bookmark/add",
        payload : {
            id,
            isChecked
        }
    }
}

const store = createStore(reducer);

export default function PageA () {
    return (
        <>
        <Provider store={store}>
            <h2>root</h2>
            <Jobs/>
            <Bookmark/>
        </Provider>
        </>
    )
}


const Jobs = () => {

    return (
        <div id="wrapper">
            <h3>Jobs</h3>
            <JobCard/>
        </div>
    )
}

const JobCard = () => {


    const dispatch = useDispatch()
    return (
        <div id="wrapper">
            <h3>JobCard</h3>
            {
                initialJobList.map((data, index) => {
                    return(
                        <>
                        <div id="jobcard-wrapper">
                            <div>{data.isChecked && "checked!"}</div>
                            <div>{data.job}</div>
                            <button onClick={() => {
                                 dispatch(addBookmark(index, data.isChecked))
                            }}>
                                {data.job} 추가
                            </button>
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}


const Bookmark = () => {
    const jobs = useSelector((state) => state);
    console.log(jobs);
    return (
        <div id="wrapper" style={ {height:"200px"} }>
            <h3>Bookmark</h3>

            {
                jobs.filter((data) => data.isChecked)
                    .map((data) => {
                        return(
                            <>
                                {data.job}
                            </>
                        )
                    })
            }
        </div>
    )
}

