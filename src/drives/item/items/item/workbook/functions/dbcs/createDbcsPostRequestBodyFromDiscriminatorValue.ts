import {deserializeIntoDbcsPostRequestBody} from './deserializeIntoDbcsPostRequestBody';
import {DbcsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDbcsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDbcsPostRequestBody;
}
