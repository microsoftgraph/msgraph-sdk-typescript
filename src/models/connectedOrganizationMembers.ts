import {SubjectSet} from './subjectSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationMembers extends Parsable, SubjectSet {
    /**
     * The ID of the connected organization in entitlement management.
     */
    connectedOrganizationId?: string | undefined;
    /**
     * The name of the connected organization.
     */
    description?: string | undefined;
}
