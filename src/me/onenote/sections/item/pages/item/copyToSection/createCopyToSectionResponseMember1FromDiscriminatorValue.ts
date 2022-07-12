import {CopyToSectionResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToSectionResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToSectionResponseMember1();
}
