import {ContactRelationship} from './contactRelationship';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RelatedContact extends AdditionalDataHolder, Parsable {
    /**
     * Indicates whether the user has been consented to access student data.
     */
    accessConsent?: boolean | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Name of the contact. Required.
     */
    displayName?: string | undefined;
    /**
     * Primary email address of the contact. Required.
     */
    emailAddress?: string | undefined;
    /**
     * Mobile phone number of the contact.
     */
    mobilePhone?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The relationship property
     */
    relationship?: ContactRelationship | undefined;
}
