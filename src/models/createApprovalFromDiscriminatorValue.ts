import {ApprovalImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApprovalImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApprovalImpl();
}
