import { deserializeIntoAllowedValue } from './deserializeIntoAllowedValue';
import { type AllowedValue } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAllowedValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAllowedValue;
}
