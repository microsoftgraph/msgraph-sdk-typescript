import {GammaLnPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGammaLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GammaLnPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GammaLnPostRequestBody();
}
