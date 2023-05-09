import {deserializeIntoAverageIfsPostRequestBody} from './deserializeIntoAverageIfsPostRequestBody';
import {AverageIfsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAverageIfsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAverageIfsPostRequestBody;
}
