import {deserializeIntoProtectPostRequestBody} from './deserializeIntoProtectPostRequestBody';
import {ProtectPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProtectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProtectPostRequestBody;
}
