import {deserializeIntoApprovalStageCollectionResponse} from './deserializeIntoApprovalStageCollectionResponse';
import {ApprovalStageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApprovalStageCollectionResponse;
}
