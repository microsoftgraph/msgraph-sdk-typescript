import { deserializeIntoSubjectRightsRequestSiteLocation } from './deserializeIntoSubjectRightsRequestSiteLocation';
import { type SubjectRightsRequestEnumeratedSiteLocation } from './subjectRightsRequestEnumeratedSiteLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestEnumeratedSiteLocation(subjectRightsRequestEnumeratedSiteLocation: SubjectRightsRequestEnumeratedSiteLocation | undefined = {} as SubjectRightsRequestEnumeratedSiteLocation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectRightsRequestSiteLocation(subjectRightsRequestEnumeratedSiteLocation),
        "urls": n => { subjectRightsRequestEnumeratedSiteLocation.urls = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
