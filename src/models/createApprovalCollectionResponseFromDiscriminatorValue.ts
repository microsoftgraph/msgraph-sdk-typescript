import {deserializeIntoApprovalCollectionResponse} from './deserializeIntoApprovalCollectionResponse';
import {ApprovalCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApprovalCollectionResponse;
}
