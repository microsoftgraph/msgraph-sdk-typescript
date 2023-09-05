import { type SubjectRightsRequestMailboxLocation } from './subjectRightsRequestMailboxLocation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestMailboxLocation(subjectRightsRequestMailboxLocation: SubjectRightsRequestMailboxLocation | undefined = {} as SubjectRightsRequestMailboxLocation) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { subjectRightsRequestMailboxLocation.odataType = n.getStringValue(); },
    }
}
