import { serializeSubjectRightsRequestSiteLocation } from './serializeSubjectRightsRequestSiteLocation';
import { type SubjectRightsRequestAllSiteLocation } from './subjectRightsRequestAllSiteLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubjectRightsRequestAllSiteLocation(writer: SerializationWriter, subjectRightsRequestAllSiteLocation: SubjectRightsRequestAllSiteLocation | undefined = {} as SubjectRightsRequestAllSiteLocation) : void {
        serializeSubjectRightsRequestSiteLocation(writer, subjectRightsRequestAllSiteLocation)
}
