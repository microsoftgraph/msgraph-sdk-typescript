import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {KeyValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKeyValuePair;
}
