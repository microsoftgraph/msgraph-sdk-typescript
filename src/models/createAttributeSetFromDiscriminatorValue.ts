import {deserializeIntoAttributeSet} from './deserializeIntoAttributeSet';
import {AttributeSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeSet;
}
