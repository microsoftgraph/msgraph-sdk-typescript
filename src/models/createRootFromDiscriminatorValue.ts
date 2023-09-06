import { deserializeIntoRoot } from './deserializeIntoRoot';
import { type Root } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRoot;
}
