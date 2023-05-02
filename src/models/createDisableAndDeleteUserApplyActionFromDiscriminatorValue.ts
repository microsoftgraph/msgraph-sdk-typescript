import {deserializeIntoDisableAndDeleteUserApplyAction} from './deserializeIntoDisableAndDeleteUserApplyAction';
import {DisableAndDeleteUserApplyAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisableAndDeleteUserApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDisableAndDeleteUserApplyAction;
}
