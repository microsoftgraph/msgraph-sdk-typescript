import {deserializeIntoGammaPostRequestBody} from './deserializeIntoGammaPostRequestBody';
import {GammaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGammaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGammaPostRequestBody;
}
