import { deserializeIntoGammaLnPostRequestBody } from './deserializeIntoGammaLnPostRequestBody';
import { type GammaLnPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGammaLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGammaLnPostRequestBody;
}
