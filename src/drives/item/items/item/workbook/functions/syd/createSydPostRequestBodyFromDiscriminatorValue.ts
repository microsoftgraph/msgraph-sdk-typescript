import {deserializeIntoSydPostRequestBody} from './deserializeIntoSydPostRequestBody';
import {SydPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSydPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSydPostRequestBody;
}
