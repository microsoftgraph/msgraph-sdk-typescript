import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrivacyProfile extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A valid smtp email address for the privacy statement contact. Not required.
     */
    contactEmail?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the company's privacy statement. Not required.
     */
    statementUrl?: string | undefined;
}
