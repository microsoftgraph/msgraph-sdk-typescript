import { deserializeIntoCollapseProperty } from './deserializeIntoCollapseProperty';
import { type CollapseProperty } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCollapsePropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCollapseProperty;
}
