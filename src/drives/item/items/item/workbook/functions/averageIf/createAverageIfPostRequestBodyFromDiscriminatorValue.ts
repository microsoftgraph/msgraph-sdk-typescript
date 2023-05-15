import {deserializeIntoAverageIfPostRequestBody} from './deserializeIntoAverageIfPostRequestBody';
import {AverageIfPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAverageIfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAverageIfPostRequestBody;
}
