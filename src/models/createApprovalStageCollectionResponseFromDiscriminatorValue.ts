import {ApprovalStageCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApprovalStageCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApprovalStageCollectionResponseImpl();
}
