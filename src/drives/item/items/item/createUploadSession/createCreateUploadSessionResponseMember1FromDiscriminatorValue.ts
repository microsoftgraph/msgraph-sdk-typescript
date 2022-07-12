import {CreateUploadSessionResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateUploadSessionResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateUploadSessionResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateUploadSessionResponseMember1();
}
