import {deserializeIntoUpperPostRequestBody} from './deserializeIntoUpperPostRequestBody';
import {UpperPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpperPostRequestBody;
}
