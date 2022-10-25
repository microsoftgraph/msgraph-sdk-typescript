import {SubjectRightsRequestHistoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestHistoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestHistoryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestHistoryCollectionResponse();
}
