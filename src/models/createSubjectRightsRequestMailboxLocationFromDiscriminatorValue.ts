import { deserializeIntoSubjectRightsRequestAllMailboxLocation } from './deserializeIntoSubjectRightsRequestAllMailboxLocation';
import { deserializeIntoSubjectRightsRequestEnumeratedMailboxLocation } from './deserializeIntoSubjectRightsRequestEnumeratedMailboxLocation';
import { deserializeIntoSubjectRightsRequestMailboxLocation } from './deserializeIntoSubjectRightsRequestMailboxLocation';
import { type SubjectRightsRequestAllMailboxLocation, type SubjectRightsRequestEnumeratedMailboxLocation, type SubjectRightsRequestMailboxLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestMailboxLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.subjectRightsRequestAllMailboxLocation":
                    return deserializeIntoSubjectRightsRequestAllMailboxLocation;
                case "#microsoft.graph.subjectRightsRequestEnumeratedMailboxLocation":
                    return deserializeIntoSubjectRightsRequestEnumeratedMailboxLocation;
            }
        }
    }
    return deserializeIntoSubjectRightsRequestMailboxLocation;
}
