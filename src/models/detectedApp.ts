import {Entity} from './entity';
import {ManagedDevice} from './managedDevice';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DetectedApp extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The number of devices that have installed this application */
    deviceCount?: number | undefined;
    /** Name of the discovered application. Read-only */
    displayName?: string | undefined;
    /** The devices that have the discovered application installed */
    managedDevices?: ManagedDevice[] | undefined;
    /** Discovered application size in bytes. Read-only */
    sizeInByte?: number | undefined;
    /** Version of the discovered application. Read-only */
    version?: string | undefined;
}
