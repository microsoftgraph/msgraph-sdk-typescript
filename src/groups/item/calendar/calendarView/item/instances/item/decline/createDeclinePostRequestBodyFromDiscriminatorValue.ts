import {deserializeIntoDeclinePostRequestBody} from './deserializeIntoDeclinePostRequestBody';
import {DeclinePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeclinePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeclinePostRequestBody;
}
