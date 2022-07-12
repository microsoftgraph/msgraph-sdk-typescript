import {CopyToSectionGroupResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionGroupResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToSectionGroupResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToSectionGroupResponseMember1();
}
