import {CreateForwardResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateForwardResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateForwardResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateForwardResponseMember1();
}
