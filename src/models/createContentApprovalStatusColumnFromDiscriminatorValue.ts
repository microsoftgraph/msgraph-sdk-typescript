import { deserializeIntoContentApprovalStatusColumn } from './deserializeIntoContentApprovalStatusColumn';
import { type ContentApprovalStatusColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContentApprovalStatusColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentApprovalStatusColumn;
}
