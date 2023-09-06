import { deserializeIntoSubjectRightsRequestAllMailboxLocation } from './deserializeIntoSubjectRightsRequestAllMailboxLocation';
import { type SubjectRightsRequestAllMailboxLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestAllMailboxLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestAllMailboxLocation;
}
