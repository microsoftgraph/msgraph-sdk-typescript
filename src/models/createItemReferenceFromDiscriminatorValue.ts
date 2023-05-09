import {deserializeIntoItemReference} from './deserializeIntoItemReference';
import {ItemReference} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemReference;
}
