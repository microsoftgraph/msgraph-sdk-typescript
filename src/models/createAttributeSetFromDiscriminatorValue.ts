import {AttributeSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttributeSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttributeSet();
}
