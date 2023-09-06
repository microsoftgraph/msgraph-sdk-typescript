import { deserializeIntoLogNorm_DistPostRequestBody } from './deserializeIntoLogNorm_DistPostRequestBody';
import { type LogNorm_DistPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLogNorm_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLogNorm_DistPostRequestBody;
}
