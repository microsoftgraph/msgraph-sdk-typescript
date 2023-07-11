import {ConditionalAccessGuestsOrExternalUsers} from './conditionalAccessGuestsOrExternalUsers';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessUsers extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Group IDs excluded from scope of policy.
     */
    excludeGroups?: string[] | undefined;
    /**
     * Internal guests or external users excluded from the policy scope. Optionally populated.
     */
    excludeGuestsOrExternalUsers?: ConditionalAccessGuestsOrExternalUsers | undefined;
    /**
     * Role IDs excluded from scope of policy.
     */
    excludeRoles?: string[] | undefined;
    /**
     * User IDs excluded from scope of policy and/or GuestsOrExternalUsers.
     */
    excludeUsers?: string[] | undefined;
    /**
     * Group IDs in scope of policy unless explicitly excluded.
     */
    includeGroups?: string[] | undefined;
    /**
     * Internal guests or external users included in the policy scope. Optionally populated.
     */
    includeGuestsOrExternalUsers?: ConditionalAccessGuestsOrExternalUsers | undefined;
    /**
     * Role IDs in scope of policy unless explicitly excluded.
     */
    includeRoles?: string[] | undefined;
    /**
     * User IDs in scope of policy unless explicitly excluded, None, All, or GuestsOrExternalUsers.
     */
    includeUsers?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
