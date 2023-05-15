import {deserializeIntoBitorPostRequestBody} from './deserializeIntoBitorPostRequestBody';
import {BitorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitorPostRequestBody;
}
