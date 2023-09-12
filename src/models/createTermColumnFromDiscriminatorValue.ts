import { deserializeIntoTermColumn } from './deserializeIntoTermColumn';
import { type TermColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermColumn;
}
