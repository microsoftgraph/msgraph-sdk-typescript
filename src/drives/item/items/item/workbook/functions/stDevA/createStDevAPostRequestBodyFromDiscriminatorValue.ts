import {deserializeIntoStDevAPostRequestBody} from './deserializeIntoStDevAPostRequestBody';
import {StDevAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStDevAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStDevAPostRequestBody;
}
