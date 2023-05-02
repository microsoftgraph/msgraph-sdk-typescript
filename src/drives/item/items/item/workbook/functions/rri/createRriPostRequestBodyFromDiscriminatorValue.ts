import {deserializeIntoRriPostRequestBody} from './deserializeIntoRriPostRequestBody';
import {RriPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRriPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRriPostRequestBody;
}
