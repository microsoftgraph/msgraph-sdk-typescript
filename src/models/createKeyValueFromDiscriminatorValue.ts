import { deserializeIntoKeyValue } from './deserializeIntoKeyValue';
import { type KeyValue } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKeyValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKeyValue;
}
