import { serializeSubjectRightsRequestMailboxLocation } from './serializeSubjectRightsRequestMailboxLocation';
import { type SubjectRightsRequestEnumeratedMailboxLocation } from './subjectRightsRequestEnumeratedMailboxLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestEnumeratedMailboxLocation(writer: SerializationWriter, subjectRightsRequestEnumeratedMailboxLocation: SubjectRightsRequestEnumeratedMailboxLocation | undefined = {} as SubjectRightsRequestEnumeratedMailboxLocation) : void {
        serializeSubjectRightsRequestMailboxLocation(writer, subjectRightsRequestEnumeratedMailboxLocation)
        writer.writeCollectionOfPrimitiveValues<string>("userPrincipalNames", subjectRightsRequestEnumeratedMailboxLocation.userPrincipalNames);
}
