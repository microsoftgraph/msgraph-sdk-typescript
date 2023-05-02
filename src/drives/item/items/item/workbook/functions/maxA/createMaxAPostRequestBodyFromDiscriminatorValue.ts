import {deserializeIntoMaxAPostRequestBody} from './deserializeIntoMaxAPostRequestBody';
import {MaxAPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMaxAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMaxAPostRequestBody;
}
