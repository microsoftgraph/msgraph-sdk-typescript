import {deserializeIntoOrPostRequestBody} from './deserializeIntoOrPostRequestBody';
import {OrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrPostRequestBody;
}
