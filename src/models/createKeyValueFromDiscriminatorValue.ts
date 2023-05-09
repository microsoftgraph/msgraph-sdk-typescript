import {deserializeIntoKeyValue} from './deserializeIntoKeyValue';
import {KeyValue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKeyValue;
}
