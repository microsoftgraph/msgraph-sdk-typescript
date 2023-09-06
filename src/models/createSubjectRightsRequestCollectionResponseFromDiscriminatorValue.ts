import { deserializeIntoSubjectRightsRequestCollectionResponse } from './deserializeIntoSubjectRightsRequestCollectionResponse';
import { type SubjectRightsRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubjectRightsRequestCollectionResponse;
}
