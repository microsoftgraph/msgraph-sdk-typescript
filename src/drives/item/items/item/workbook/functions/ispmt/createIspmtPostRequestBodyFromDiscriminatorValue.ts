import {deserializeIntoIspmtPostRequestBody} from './deserializeIntoIspmtPostRequestBody';
import {IspmtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIspmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIspmtPostRequestBody;
}
