import {deserializeIntoAtanhPostRequestBody} from './deserializeIntoAtanhPostRequestBody';
import {AtanhPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAtanhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAtanhPostRequestBody;
}
