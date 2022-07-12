import {AddCopyResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyResponseMember1();
}
