import { deserializeIntoLogNorm_InvPostRequestBody } from './deserializeIntoLogNorm_InvPostRequestBody';
import { type LogNorm_InvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLogNorm_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLogNorm_InvPostRequestBody;
}
