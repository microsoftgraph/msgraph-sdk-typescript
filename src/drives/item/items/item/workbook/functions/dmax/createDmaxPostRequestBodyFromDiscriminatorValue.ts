import { deserializeIntoDmaxPostRequestBody } from './deserializeIntoDmaxPostRequestBody';
import { type DmaxPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDmaxPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDmaxPostRequestBody;
}
