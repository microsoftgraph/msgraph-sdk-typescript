import {deserializeIntoEffectPostRequestBody} from './deserializeIntoEffectPostRequestBody';
import {EffectPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEffectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEffectPostRequestBody;
}
