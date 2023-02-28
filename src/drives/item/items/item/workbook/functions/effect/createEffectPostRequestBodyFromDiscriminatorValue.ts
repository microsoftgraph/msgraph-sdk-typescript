import {EffectPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEffectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : EffectPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EffectPostRequestBody();
}
