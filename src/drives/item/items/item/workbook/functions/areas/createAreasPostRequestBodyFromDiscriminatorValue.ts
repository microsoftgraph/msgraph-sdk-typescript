import { deserializeIntoAreasPostRequestBody } from './deserializeIntoAreasPostRequestBody';
import { type AreasPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAreasPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAreasPostRequestBody;
}
