import {ApprovalCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApprovalCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApprovalCollectionResponseImpl();
}
