import {deserializeIntoSkewPostRequestBody} from './deserializeIntoSkewPostRequestBody';
import {SkewPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkewPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSkewPostRequestBody;
}
