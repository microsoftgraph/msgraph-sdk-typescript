import {InsightIdentity} from './insightIdentity';
import {ResourceReference} from './resourceReference';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharingDetail extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The user who shared the document.
     */
    sharedBy?: InsightIdentity | undefined;
    /**
     * The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    sharedDateTime?: Date | undefined;
    /**
     * The sharingReference property
     */
    sharingReference?: ResourceReference | undefined;
    /**
     * The subject with which the document was shared.
     */
    sharingSubject?: string | undefined;
    /**
     * Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'.
     */
    sharingType?: string | undefined;
}
