import {SubjectSet} from './subjectSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SingleUser extends Parsable, SubjectSet {
    /**
     * The name of the user in Azure AD. Read only.
     */
    description?: string | undefined;
    /**
     * The ID of the user in Azure AD.
     */
    userId?: string | undefined;
}
