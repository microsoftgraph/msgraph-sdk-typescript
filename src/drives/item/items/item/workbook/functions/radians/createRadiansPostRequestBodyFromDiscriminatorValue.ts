import {deserializeIntoRadiansPostRequestBody} from './deserializeIntoRadiansPostRequestBody';
import {RadiansPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRadiansPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRadiansPostRequestBody;
}
