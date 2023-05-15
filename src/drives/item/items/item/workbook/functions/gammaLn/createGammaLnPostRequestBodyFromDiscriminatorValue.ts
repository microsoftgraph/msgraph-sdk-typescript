import {deserializeIntoGammaLnPostRequestBody} from './deserializeIntoGammaLnPostRequestBody';
import {GammaLnPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGammaLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGammaLnPostRequestBody;
}
