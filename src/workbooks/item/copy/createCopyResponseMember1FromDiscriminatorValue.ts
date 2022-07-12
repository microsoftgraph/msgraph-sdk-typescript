import {CopyResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyResponseMember1();
}
