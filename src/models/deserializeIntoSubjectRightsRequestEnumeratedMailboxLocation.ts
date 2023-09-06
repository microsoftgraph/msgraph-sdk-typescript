import { deserializeIntoSubjectRightsRequestMailboxLocation } from './deserializeIntoSubjectRightsRequestMailboxLocation';
import { type SubjectRightsRequestEnumeratedMailboxLocation } from './subjectRightsRequestEnumeratedMailboxLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestEnumeratedMailboxLocation(subjectRightsRequestEnumeratedMailboxLocation: SubjectRightsRequestEnumeratedMailboxLocation | undefined = {} as SubjectRightsRequestEnumeratedMailboxLocation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectRightsRequestMailboxLocation(subjectRightsRequestEnumeratedMailboxLocation),
        "userPrincipalNames": n => { subjectRightsRequestEnumeratedMailboxLocation.userPrincipalNames = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
