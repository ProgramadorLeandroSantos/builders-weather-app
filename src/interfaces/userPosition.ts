export interface UserPosition {
    latitude?: number;
    longitude?: number;
    lat?: number,
    lon?: number,
}
export interface UserPositionHook {
    userPosition:UserPosition,
    setUserLocation: (location:UserPosition) => void,
}