import {SubscribeToToneOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToToneOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribeToToneOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribeToToneOperationImpl();
}
