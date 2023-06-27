import {BitLockerEncryptionMethod} from './bitLockerEncryptionMethod';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BitLockerRemovableDrivePolicy extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * This policy setting determines whether BitLocker protection is required for removable data drives to be writable on a computer.
     */
    blockCrossOrganizationWriteAccess?: boolean | undefined;
    /**
     * Select the encryption method for removable  drives. Possible values are: aesCbc128, aesCbc256, xtsAes128, xtsAes256.
     */
    encryptionMethod?: BitLockerEncryptionMethod | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Indicates whether to block write access to devices configured in another organization.  If requireEncryptionForWriteAccess is false, this value does not affect.
     */
    requireEncryptionForWriteAccess?: boolean | undefined;
}
