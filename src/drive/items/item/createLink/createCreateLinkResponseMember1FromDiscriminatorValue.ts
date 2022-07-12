import {CreateLinkResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateLinkResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateLinkResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateLinkResponseMember1();
}
