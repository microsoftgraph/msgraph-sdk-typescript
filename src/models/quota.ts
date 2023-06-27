import {StoragePlanInformation} from './storagePlanInformation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Quota extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Total space consumed by files in the recycle bin, in bytes. Read-only.
     */
    deleted?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Total space remaining before reaching the quota limit, in bytes. Read-only.
     */
    remaining?: number | undefined;
    /**
     * Enumeration value that indicates the state of the storage space. Read-only.
     */
    state?: string | undefined;
    /**
     * Information about the drive's storage quota plans. Only in Personal OneDrive.
     */
    storagePlanInformation?: StoragePlanInformation | undefined;
    /**
     * Total allowed storage space, in bytes. Read-only.
     */
    total?: number | undefined;
    /**
     * Total space used, in bytes. Read-only.
     */
    used?: number | undefined;
}
