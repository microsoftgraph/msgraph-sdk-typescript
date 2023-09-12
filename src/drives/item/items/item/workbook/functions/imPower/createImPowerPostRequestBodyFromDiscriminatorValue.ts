import { deserializeIntoImPowerPostRequestBody } from './deserializeIntoImPowerPostRequestBody';
import { type ImPowerPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImPowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImPowerPostRequestBody;
}
