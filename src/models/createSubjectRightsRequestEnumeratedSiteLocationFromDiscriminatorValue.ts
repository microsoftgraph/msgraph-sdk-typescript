import { deserializeIntoSubjectRightsRequestEnumeratedSiteLocation } from './deserializeIntoSubjectRightsRequestEnumeratedSiteLocation';
import { type SubjectRightsRequestEnumeratedSiteLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestEnumeratedSiteLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestEnumeratedSiteLocation;
}
