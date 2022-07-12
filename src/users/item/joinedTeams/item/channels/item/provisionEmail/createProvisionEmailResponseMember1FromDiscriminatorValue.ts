import {ProvisionEmailResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionEmailResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionEmailResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionEmailResponseMember1();
}
