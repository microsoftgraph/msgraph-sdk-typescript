import {deserializeIntoMidPostRequestBody} from './deserializeIntoMidPostRequestBody';
import {MidPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMidPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMidPostRequestBody;
}
