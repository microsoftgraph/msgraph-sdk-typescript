import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type GammaPostRequestBody } from './gammaPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGammaPostRequestBody(gammaPostRequestBody: GammaPostRequestBody | undefined = {} as GammaPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { gammaPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
