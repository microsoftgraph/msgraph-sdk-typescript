import {PermissionGrantConditionSetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantConditionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionGrantConditionSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionGrantConditionSetImpl();
}
