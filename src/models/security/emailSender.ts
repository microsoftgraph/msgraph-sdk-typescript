import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EmailSender extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the sender.
     */
    displayName?: string | undefined;
    /**
     * Sender domain.
     */
    domainName?: string | undefined;
    /**
     * Sender email address.
     */
    emailAddress?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
