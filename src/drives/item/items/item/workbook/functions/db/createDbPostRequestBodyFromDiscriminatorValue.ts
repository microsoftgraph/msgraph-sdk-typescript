import {deserializeIntoDbPostRequestBody} from './deserializeIntoDbPostRequestBody';
import {DbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDbPostRequestBody;
}
