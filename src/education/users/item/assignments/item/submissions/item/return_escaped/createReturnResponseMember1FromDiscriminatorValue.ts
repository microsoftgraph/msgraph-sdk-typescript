import {ReturnResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReturnResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ReturnResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReturnResponseMember1();
}
