import {VerifyResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifyResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : VerifyResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerifyResponseMember1();
}
