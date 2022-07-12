import {GetOrderResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetOrderResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetOrderResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetOrderResponseMember1();
}
