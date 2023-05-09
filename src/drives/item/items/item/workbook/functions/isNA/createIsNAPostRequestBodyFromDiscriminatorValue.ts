import {deserializeIntoIsNAPostRequestBody} from './deserializeIntoIsNAPostRequestBody';
import {IsNAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsNAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsNAPostRequestBody;
}
