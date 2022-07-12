import {SubscribeToToneResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToToneResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribeToToneResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribeToToneResponseMember1();
}
