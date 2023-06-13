import {deserializeIntoCollapseProperty} from './deserializeIntoCollapseProperty';
import {CollapseProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCollapsePropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCollapseProperty;
}
