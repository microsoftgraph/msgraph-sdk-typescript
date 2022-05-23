import {Entity} from './entity';
import {ManagedDevice} from './managedDevice';

export interface DetectedApp extends Entity{
    /** The number of devices that have installed this application */
    deviceCount?:number | undefined;
    /** Name of the discovered application. Read-only */
    displayName?:string | undefined;
    /** The devices that have the discovered application installed */
    managedDevices?:ManagedDevice[] | undefined;
    /** Discovered application size in bytes. Read-only */
    sizeInByte?:number | undefined;
    /** Version of the discovered application. Read-only */
    version?:string | undefined;
}
