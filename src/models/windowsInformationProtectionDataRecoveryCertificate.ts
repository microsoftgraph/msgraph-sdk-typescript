import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionDataRecoveryCertificate extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Data recovery Certificate */
    certificate?: string | undefined;
    /** Data recovery Certificate description */
    description?: string | undefined;
    /** Data recovery Certificate expiration datetime */
    expirationDateTime?: Date | undefined;
    /** Data recovery Certificate subject name */
    subjectName?: string | undefined;
}
