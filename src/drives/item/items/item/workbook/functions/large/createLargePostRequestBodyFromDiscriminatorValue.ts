import {deserializeIntoLargePostRequestBody} from './deserializeIntoLargePostRequestBody';
import {LargePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLargePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLargePostRequestBody;
}
