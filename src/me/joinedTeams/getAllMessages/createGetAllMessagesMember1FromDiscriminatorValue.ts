import {GetAllMessagesMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAllMessagesMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAllMessagesMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAllMessagesMember1();
}
