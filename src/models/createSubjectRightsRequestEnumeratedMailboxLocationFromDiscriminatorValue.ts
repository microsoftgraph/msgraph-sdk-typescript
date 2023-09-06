import { deserializeIntoSubjectRightsRequestEnumeratedMailboxLocation } from './deserializeIntoSubjectRightsRequestEnumeratedMailboxLocation';
import { type SubjectRightsRequestEnumeratedMailboxLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestEnumeratedMailboxLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestEnumeratedMailboxLocation;
}
