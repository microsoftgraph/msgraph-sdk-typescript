import {deserializeIntoF_InvPostRequestBody} from './deserializeIntoF_InvPostRequestBody';
import {F_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createF_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoF_InvPostRequestBody;
}
