import { serializeSubjectRightsRequestMailboxLocation } from './serializeSubjectRightsRequestMailboxLocation';
import { type SubjectRightsRequestAllMailboxLocation } from './subjectRightsRequestAllMailboxLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestAllMailboxLocation(writer: SerializationWriter, subjectRightsRequestAllMailboxLocation: SubjectRightsRequestAllMailboxLocation | undefined = {} as SubjectRightsRequestAllMailboxLocation) : void {
        serializeSubjectRightsRequestMailboxLocation(writer, subjectRightsRequestAllMailboxLocation)
}
