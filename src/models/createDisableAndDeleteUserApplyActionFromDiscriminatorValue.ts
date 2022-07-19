import {DisableAndDeleteUserApplyAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisableAndDeleteUserApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DisableAndDeleteUserApplyAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DisableAndDeleteUserApplyAction();
}
