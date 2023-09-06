import { deserializeIntoDefaultColumnValue } from './deserializeIntoDefaultColumnValue';
import { type DefaultColumnValue } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDefaultColumnValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDefaultColumnValue;
}
