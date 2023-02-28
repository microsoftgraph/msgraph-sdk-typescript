import {GammaLn_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGammaLn_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GammaLn_PrecisePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GammaLn_PrecisePostRequestBody();
}
