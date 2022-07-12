import {SetUpResourcesFolderResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetUpResourcesFolderResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : SetUpResourcesFolderResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetUpResourcesFolderResponseMember1();
}
