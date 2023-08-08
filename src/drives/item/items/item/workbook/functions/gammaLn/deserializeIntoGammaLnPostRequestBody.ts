import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GammaLnPostRequestBody} from './gammaLnPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGammaLnPostRequestBody(gammaLnPostRequestBody: GammaLnPostRequestBody | undefined = {} as GammaLnPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { gammaLnPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
