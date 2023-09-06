import { type Privacy } from './privacy';
import { serializeSubjectRightsRequest } from './serializeSubjectRightsRequest';
import { type SubjectRightsRequest } from './subjectRightsRequest';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrivacy(writer: SerializationWriter, privacy: Privacy | undefined = {} as Privacy) : void {
        writer.writeStringValue("@odata.type", privacy.odataType);
        writer.writeCollectionOfObjectValues<SubjectRightsRequest>("subjectRightsRequests", privacy.subjectRightsRequests, serializeSubjectRightsRequest);
        writer.writeAdditionalData(privacy.additionalData);
}
