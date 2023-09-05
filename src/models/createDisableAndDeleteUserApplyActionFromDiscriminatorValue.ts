import { deserializeIntoDisableAndDeleteUserApplyAction } from './deserializeIntoDisableAndDeleteUserApplyAction';
import { type DisableAndDeleteUserApplyAction } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDisableAndDeleteUserApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDisableAndDeleteUserApplyAction;
}
