import { type SubjectRightsRequestMailboxLocation } from './subjectRightsRequestMailboxLocation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestMailboxLocation(writer: SerializationWriter, subjectRightsRequestMailboxLocation: SubjectRightsRequestMailboxLocation | undefined = {} as SubjectRightsRequestMailboxLocation) : void {
        writer.writeStringValue("@odata.type", subjectRightsRequestMailboxLocation.odataType);
        writer.writeAdditionalData(subjectRightsRequestMailboxLocation.additionalData);
}
