import {CreateUploadSessionMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateUploadSessionMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateUploadSessionMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateUploadSessionMember1();
}
