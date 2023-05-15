import {deserializeIntoSignPostRequestBody} from './deserializeIntoSignPostRequestBody';
import {SignPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSignPostRequestBody;
}
