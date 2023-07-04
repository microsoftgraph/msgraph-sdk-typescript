import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SigningCertificateUpdateStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status.
     */
    certificateUpdateResult?: string | undefined;
    /**
     * Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only.
     */
    lastRunDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
