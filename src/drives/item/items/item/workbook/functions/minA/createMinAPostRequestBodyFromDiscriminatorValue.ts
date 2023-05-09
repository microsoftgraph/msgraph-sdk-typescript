import {deserializeIntoMinAPostRequestBody} from './deserializeIntoMinAPostRequestBody';
import {MinAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMinAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMinAPostRequestBody;
}
