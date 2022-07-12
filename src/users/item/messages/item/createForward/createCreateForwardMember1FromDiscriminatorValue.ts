import {CreateForwardMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateForwardMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateForwardMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateForwardMember1();
}
