import { deserializeIntoStDev_SPostRequestBody } from './deserializeIntoStDev_SPostRequestBody';
import { type StDev_SPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStDev_SPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStDev_SPostRequestBody;
}
