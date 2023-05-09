import {deserializeIntoStDevPAPostRequestBody} from './deserializeIntoStDevPAPostRequestBody';
import {StDevPAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStDevPAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStDevPAPostRequestBody;
}
