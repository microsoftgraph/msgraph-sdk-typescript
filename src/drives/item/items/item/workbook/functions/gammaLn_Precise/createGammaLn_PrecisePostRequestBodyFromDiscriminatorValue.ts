import {deserializeIntoGammaLn_PrecisePostRequestBody} from './deserializeIntoGammaLn_PrecisePostRequestBody';
import {GammaLn_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGammaLn_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGammaLn_PrecisePostRequestBody;
}
