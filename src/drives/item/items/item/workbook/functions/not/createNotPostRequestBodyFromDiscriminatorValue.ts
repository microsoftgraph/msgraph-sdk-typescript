import {deserializeIntoNotPostRequestBody} from './deserializeIntoNotPostRequestBody';
import {NotPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotPostRequestBody;
}
