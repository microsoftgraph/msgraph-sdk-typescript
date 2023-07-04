import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionDataRecoveryCertificate extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Data recovery Certificate
     */
    certificate?: string | undefined;
    /**
     * Data recovery Certificate description
     */
    description?: string | undefined;
    /**
     * Data recovery Certificate expiration datetime
     */
    expirationDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Data recovery Certificate subject name
     */
    subjectName?: string | undefined;
}
