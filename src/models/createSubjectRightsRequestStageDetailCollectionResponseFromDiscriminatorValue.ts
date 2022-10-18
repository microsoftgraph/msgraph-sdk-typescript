import {SubjectRightsRequestStageDetailCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestStageDetailCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestStageDetailCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestStageDetailCollectionResponse();
}
