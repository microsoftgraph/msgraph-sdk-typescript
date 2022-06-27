import {DisableAndDeleteUserApplyActionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisableAndDeleteUserApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DisableAndDeleteUserApplyActionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DisableAndDeleteUserApplyActionImpl();
}
