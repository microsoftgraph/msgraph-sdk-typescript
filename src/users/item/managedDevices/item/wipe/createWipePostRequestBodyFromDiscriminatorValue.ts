import {deserializeIntoWipePostRequestBody} from './deserializeIntoWipePostRequestBody';
import {WipePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWipePostRequestBody;
}
