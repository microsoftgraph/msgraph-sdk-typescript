import {GetByPathWithPathResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetByPathWithPathResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetByPathWithPathResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetByPathWithPathResponseMember1();
}
