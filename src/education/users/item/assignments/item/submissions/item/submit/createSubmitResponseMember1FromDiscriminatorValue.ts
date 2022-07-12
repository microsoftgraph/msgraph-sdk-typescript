import {SubmitResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubmitResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : SubmitResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubmitResponseMember1();
}
