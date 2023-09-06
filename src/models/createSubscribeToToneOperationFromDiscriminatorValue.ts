import { deserializeIntoSubscribeToToneOperation } from './deserializeIntoSubscribeToToneOperation';
import { type SubscribeToToneOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubscribeToToneOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscribeToToneOperation;
}
