import {deserializeIntoCountAPostRequestBody} from './deserializeIntoCountAPostRequestBody';
import {CountAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountAPostRequestBody;
}
