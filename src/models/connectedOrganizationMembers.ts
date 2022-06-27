import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationMembers extends Partial<AdditionalDataHolder>, Partial<Parsable>, SubjectSet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The ID of the connected organization in entitlement management. */
    connectedOrganizationId?: string | undefined;
    /** The name of the connected organization. Read only. */
    description?: string | undefined;
}
