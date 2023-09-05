import { deserializeIntoSubjectRightsRequestMailboxLocation } from './deserializeIntoSubjectRightsRequestMailboxLocation';
import { type SubjectRightsRequestAllMailboxLocation } from './subjectRightsRequestAllMailboxLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestAllMailboxLocation(subjectRightsRequestAllMailboxLocation: SubjectRightsRequestAllMailboxLocation | undefined = {} as SubjectRightsRequestAllMailboxLocation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectRightsRequestMailboxLocation(subjectRightsRequestAllMailboxLocation),
    }
}
