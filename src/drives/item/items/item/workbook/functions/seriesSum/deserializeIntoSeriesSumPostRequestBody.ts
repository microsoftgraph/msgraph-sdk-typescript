import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SeriesSumPostRequestBody} from './seriesSumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSeriesSumPostRequestBody(seriesSumPostRequestBody: SeriesSumPostRequestBody | undefined = {} as SeriesSumPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "coefficients": n => { seriesSumPostRequestBody.coefficients = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "m": n => { seriesSumPostRequestBody.m = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "n": n => { seriesSumPostRequestBody.n = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { seriesSumPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
