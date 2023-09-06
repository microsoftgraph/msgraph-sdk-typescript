import { deserializeIntoSubjectRightsRequestAllSiteLocation } from './deserializeIntoSubjectRightsRequestAllSiteLocation';
import { deserializeIntoSubjectRightsRequestEnumeratedSiteLocation } from './deserializeIntoSubjectRightsRequestEnumeratedSiteLocation';
import { deserializeIntoSubjectRightsRequestSiteLocation } from './deserializeIntoSubjectRightsRequestSiteLocation';
import { type SubjectRightsRequestAllSiteLocation, type SubjectRightsRequestEnumeratedSiteLocation, type SubjectRightsRequestSiteLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestSiteLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.subjectRightsRequestAllSiteLocation":
                    return deserializeIntoSubjectRightsRequestAllSiteLocation;
                case "#microsoft.graph.subjectRightsRequestEnumeratedSiteLocation":
                    return deserializeIntoSubjectRightsRequestEnumeratedSiteLocation;
            }
        }
    }
    return deserializeIntoSubjectRightsRequestSiteLocation;
}
