import { type SubjectRightsRequestMailboxLocation } from './subjectRightsRequestMailboxLocation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestEnumeratedMailboxLocation extends Parsable, SubjectRightsRequestMailboxLocation {
    /**
     * The userPrincipalNames property
     */
    userPrincipalNames?: string[] | undefined;
}
