import { deserializeIntoSubjectRightsRequestSiteLocation } from './deserializeIntoSubjectRightsRequestSiteLocation';
import { type SubjectRightsRequestAllSiteLocation } from './subjectRightsRequestAllSiteLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestAllSiteLocation(subjectRightsRequestAllSiteLocation: SubjectRightsRequestAllSiteLocation | undefined = {} as SubjectRightsRequestAllSiteLocation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectRightsRequestSiteLocation(subjectRightsRequestAllSiteLocation),
    }
}
