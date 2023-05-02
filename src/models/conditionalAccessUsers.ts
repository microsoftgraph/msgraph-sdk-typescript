import {ConditionalAccessGuestsOrExternalUsers} from './conditionalAccessGuestsOrExternalUsers';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessUsers extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Group IDs excluded from scope of policy. */
    excludeGroups?: string[] | undefined;
    /** The excludeGuestsOrExternalUsers property */
    excludeGuestsOrExternalUsers?: ConditionalAccessGuestsOrExternalUsers | undefined;
    /** Role IDs excluded from scope of policy. */
    excludeRoles?: string[] | undefined;
    /** User IDs excluded from scope of policy and/or GuestsOrExternalUsers. */
    excludeUsers?: string[] | undefined;
    /** Group IDs in scope of policy unless explicitly excluded. */
    includeGroups?: string[] | undefined;
    /** The includeGuestsOrExternalUsers property */
    includeGuestsOrExternalUsers?: ConditionalAccessGuestsOrExternalUsers | undefined;
    /** Role IDs in scope of policy unless explicitly excluded. */
    includeRoles?: string[] | undefined;
    /** User IDs in scope of policy unless explicitly excluded, None, All, or GuestsOrExternalUsers. */
    includeUsers?: string[] | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
}
