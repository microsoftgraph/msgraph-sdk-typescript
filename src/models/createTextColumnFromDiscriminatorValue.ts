import { deserializeIntoTextColumn } from './deserializeIntoTextColumn';
import { type TextColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTextColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTextColumn;
}
