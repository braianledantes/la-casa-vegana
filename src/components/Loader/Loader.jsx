import { ring } from 'ldrs'

export function Loader() {
    ring.register()

    // Default values shown
    return < >
        <l-ring
            size="40"
            stroke="5"
            bg-opacity="0"
            speed="2"
            color="black"
            style={{
                width: "100%",
                marginTop: "2rem"
            }}
        ></l-ring>
    </ >
}