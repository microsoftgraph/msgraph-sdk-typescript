import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Shared extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The identity of the owner of the shared item. Read-only.
     */
    owner?: IdentitySet | undefined;
    /**
     * Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only.
     */
    scope?: string | undefined;
    /**
     * The identity of the user who shared the item. Read-only.
     */
    sharedBy?: IdentitySet | undefined;
    /**
     * The UTC date and time when the item was shared. Read-only.
     */
    sharedDateTime?: Date | undefined;
}
