import {deserializeIntoContentApprovalStatusColumn} from './deserializeIntoContentApprovalStatusColumn';
import {ContentApprovalStatusColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentApprovalStatusColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentApprovalStatusColumn;
}
