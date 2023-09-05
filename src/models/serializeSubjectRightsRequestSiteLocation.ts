import { type SubjectRightsRequestSiteLocation } from './subjectRightsRequestSiteLocation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestSiteLocation(writer: SerializationWriter, subjectRightsRequestSiteLocation: SubjectRightsRequestSiteLocation | undefined = {} as SubjectRightsRequestSiteLocation) : void {
        writer.writeStringValue("@odata.type", subjectRightsRequestSiteLocation.odataType);
        writer.writeAdditionalData(subjectRightsRequestSiteLocation.additionalData);
}
