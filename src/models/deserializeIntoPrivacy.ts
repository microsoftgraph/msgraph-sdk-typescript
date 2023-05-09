import {createSubjectRightsRequestFromDiscriminatorValue} from './createSubjectRightsRequestFromDiscriminatorValue';
import {Privacy} from './privacy';
import {serializeSubjectRightsRequest} from './serializeSubjectRightsRequest';
import {SubjectRightsRequest} from './subjectRightsRequest';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrivacy(privacy: Privacy | undefined = {} as Privacy) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { privacy.odataType = n.getStringValue(); },
        "subjectRightsRequests": n => { privacy.subjectRightsRequests = n.getCollectionOfObjectValues<SubjectRightsRequest>(createSubjectRightsRequestFromDiscriminatorValue); },
    }
}
