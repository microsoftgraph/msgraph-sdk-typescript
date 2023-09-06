import { deserializeIntoRadiansPostRequestBody } from './deserializeIntoRadiansPostRequestBody';
import { type RadiansPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRadiansPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRadiansPostRequestBody;
}
