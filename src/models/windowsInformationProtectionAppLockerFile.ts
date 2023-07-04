import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLockerFile extends Entity, Parsable {
    /**
     * The friendly name
     */
    displayName?: string | undefined;
    /**
     * File as a byte array
     */
    file?: string | undefined;
    /**
     * SHA256 hash of the file
     */
    fileHash?: string | undefined;
    /**
     * Version of the entity.
     */
    version?: string | undefined;
}
