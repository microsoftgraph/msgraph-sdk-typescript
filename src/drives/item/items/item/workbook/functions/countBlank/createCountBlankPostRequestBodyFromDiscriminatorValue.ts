import {deserializeIntoCountBlankPostRequestBody} from './deserializeIntoCountBlankPostRequestBody';
import {CountBlankPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountBlankPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountBlankPostRequestBody;
}
