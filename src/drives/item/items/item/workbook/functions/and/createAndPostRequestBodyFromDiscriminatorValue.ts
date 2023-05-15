import {deserializeIntoAndPostRequestBody} from './deserializeIntoAndPostRequestBody';
import {AndPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndPostRequestBody;
}
