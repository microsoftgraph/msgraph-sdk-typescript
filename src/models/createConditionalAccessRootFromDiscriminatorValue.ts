import { deserializeIntoConditionalAccessRoot } from './deserializeIntoConditionalAccessRoot';
import { type ConditionalAccessRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessRoot;
}
