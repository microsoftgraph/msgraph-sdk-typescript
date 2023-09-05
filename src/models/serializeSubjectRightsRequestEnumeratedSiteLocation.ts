import { serializeSubjectRightsRequestSiteLocation } from './serializeSubjectRightsRequestSiteLocation';
import { type SubjectRightsRequestEnumeratedSiteLocation } from './subjectRightsRequestEnumeratedSiteLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestEnumeratedSiteLocation(writer: SerializationWriter, subjectRightsRequestEnumeratedSiteLocation: SubjectRightsRequestEnumeratedSiteLocation | undefined = {} as SubjectRightsRequestEnumeratedSiteLocation) : void {
        serializeSubjectRightsRequestSiteLocation(writer, subjectRightsRequestEnumeratedSiteLocation)
        writer.writeCollectionOfPrimitiveValues<string>("urls", subjectRightsRequestEnumeratedSiteLocation.urls);
}
