import { deserializeIntoPowerPostRequestBody } from './deserializeIntoPowerPostRequestBody';
import { type PowerPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPowerPostRequestBody;
}
