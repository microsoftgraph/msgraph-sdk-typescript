import {SubscribeToToneRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToToneRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribeToToneRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribeToToneRequestBodyImpl();
}
