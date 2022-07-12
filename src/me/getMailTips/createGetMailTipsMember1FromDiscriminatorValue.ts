import {GetMailTipsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailTipsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailTipsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailTipsMember1();
}
