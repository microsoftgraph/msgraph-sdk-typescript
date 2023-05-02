import {deserializeIntoHarMeanPostRequestBody} from './deserializeIntoHarMeanPostRequestBody';
import {HarMeanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHarMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHarMeanPostRequestBody;
}
