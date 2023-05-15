import {deserializeIntoSubscribeToToneOperation} from './deserializeIntoSubscribeToToneOperation';
import {SubscribeToToneOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToToneOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscribeToToneOperation;
}
