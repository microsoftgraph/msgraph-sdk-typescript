import {SubjectSet} from './subjectSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupMembers extends Parsable, SubjectSet {
    /**
     * The name of the group in Azure AD. Read only.
     */
    description?: string | undefined;
    /**
     * The ID of the group in Azure AD.
     */
    groupId?: string | undefined;
}
