import { deserializeIntoEffectPostRequestBody } from './deserializeIntoEffectPostRequestBody';
import { type EffectPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEffectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEffectPostRequestBody;
}
