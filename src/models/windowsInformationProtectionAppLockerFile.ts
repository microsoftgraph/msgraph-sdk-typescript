import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLockerFile extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The friendly name */
    displayName?: string | undefined;
    /** File as a byte array */
    file?: string | undefined;
    /** SHA256 hash of the file */
    fileHash?: string | undefined;
    /** Version of the entity. */
    version?: string | undefined;
}
