import {UnmuteResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnmuteResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : UnmuteResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnmuteResponseMember1();
}
