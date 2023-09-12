import { type SubjectRightsRequestSiteLocation } from './subjectRightsRequestSiteLocation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectRightsRequestSiteLocation(subjectRightsRequestSiteLocation: SubjectRightsRequestSiteLocation | undefined = {} as SubjectRightsRequestSiteLocation) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { subjectRightsRequestSiteLocation.odataType = n.getStringValue(); },
    }
}
