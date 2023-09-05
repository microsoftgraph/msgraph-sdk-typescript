import { deserializeIntoAttributeSet } from './deserializeIntoAttributeSet';
import { type AttributeSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeSet;
}
