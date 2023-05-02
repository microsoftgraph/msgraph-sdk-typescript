import {deserializeIntoSubjectRightsRequest} from './deserializeIntoSubjectRightsRequest';
import {SubjectRightsRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequest;
}
