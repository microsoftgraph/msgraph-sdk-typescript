import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { type ItemBody } from './itemBody';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface PresenceStatusMessage extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The expiryDateTime property
     */
    expiryDateTime?: DateTimeTimeZone | undefined;
    /**
     * The message property
     */
    message?: ItemBody | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The publishedDateTime property
     */
    publishedDateTime?: Date | undefined;
}
