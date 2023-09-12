import { deserializeIntoSubjectRightsRequestAllSiteLocation } from './deserializeIntoSubjectRightsRequestAllSiteLocation';
import { type SubjectRightsRequestAllSiteLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestAllSiteLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestAllSiteLocation;
}
