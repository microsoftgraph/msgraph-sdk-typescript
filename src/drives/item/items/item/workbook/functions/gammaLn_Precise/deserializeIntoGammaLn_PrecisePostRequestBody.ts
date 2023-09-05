import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type GammaLn_PrecisePostRequestBody } from './gammaLn_PrecisePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGammaLn_PrecisePostRequestBody(gammaLn_PrecisePostRequestBody: GammaLn_PrecisePostRequestBody | undefined = {} as GammaLn_PrecisePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { gammaLn_PrecisePostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
