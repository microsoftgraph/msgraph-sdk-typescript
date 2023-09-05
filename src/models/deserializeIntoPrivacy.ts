import { createSubjectRightsRequestFromDiscriminatorValue } from './createSubjectRightsRequestFromDiscriminatorValue';
import { type Privacy } from './privacy';
import { serializeSubjectRightsRequest } from './serializeSubjectRightsRequest';
import { type SubjectRightsRequest } from './subjectRightsRequest';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrivacy(privacy: Privacy | undefined = {} as Privacy) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { privacy.odataType = n.getStringValue(); },
        "subjectRightsRequests": n => { privacy.subjectRightsRequests = n.getCollectionOfObjectValues<SubjectRightsRequest>(createSubjectRightsRequestFromDiscriminatorValue); },
    }
}
