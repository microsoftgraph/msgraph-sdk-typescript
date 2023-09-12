import { deserializeIntoApproval } from './deserializeIntoApproval';
import { type Approval } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApprovalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApproval;
}
