import {UnsubmitResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnsubmitResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : UnsubmitResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnsubmitResponseMember1();
}
