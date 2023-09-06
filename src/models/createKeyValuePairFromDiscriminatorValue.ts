import { deserializeIntoKeyValuePair } from './deserializeIntoKeyValuePair';
import { type KeyValuePair } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKeyValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKeyValuePair;
}
