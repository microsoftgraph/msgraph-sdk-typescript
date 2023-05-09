import {deserializeIntoSecPostRequestBody} from './deserializeIntoSecPostRequestBody';
import {SecPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecPostRequestBody;
}
