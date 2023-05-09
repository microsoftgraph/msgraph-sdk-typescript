import {deserializeIntoOnenotePatchContentPostRequestBody} from './deserializeIntoOnenotePatchContentPostRequestBody';
import {OnenotePatchContentPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePatchContentPostRequestBody;
}
