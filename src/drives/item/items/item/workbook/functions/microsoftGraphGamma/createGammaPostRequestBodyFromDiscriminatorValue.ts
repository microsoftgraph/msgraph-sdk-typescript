import {GammaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGammaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GammaPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GammaPostRequestBody();
}
