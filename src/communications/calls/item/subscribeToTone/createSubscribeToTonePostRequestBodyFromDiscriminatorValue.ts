import {SubscribeToTonePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToTonePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribeToTonePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribeToTonePostRequestBodyImpl();
}
