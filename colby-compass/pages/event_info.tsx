import styles from "@/styles/Home.module.css";

export function DemoApp() { 
    return(
        <div className={`${styles.description}`}>
    <       h2>CS Movie Night</h2>
            <p>Date: April 8</p>
            <p>Start: 8:00pm</p>
            <p>End: 10:00pm</p>
            <p>Location: Gordon Center Theatre</p>
            <p>Description: CS-themed film playing at the Gordon Center! Food will be provided! </p>
        </div>
    )
}

export default DemoApp;