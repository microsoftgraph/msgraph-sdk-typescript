import {KeyValueImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyValueFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyValueImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyValueImpl();
}
