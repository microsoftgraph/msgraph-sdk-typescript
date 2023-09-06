import { deserializeIntoBooleanColumn } from './deserializeIntoBooleanColumn';
import { type BooleanColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBooleanColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBooleanColumn;
}
