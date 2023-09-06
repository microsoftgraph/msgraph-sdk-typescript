import { deserializeIntoColumnDefinition } from './deserializeIntoColumnDefinition';
import { type ColumnDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createColumnDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnDefinition;
}
