import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SeriesSumPostRequestBody} from './seriesSumPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSeriesSumPostRequestBody(writer: SerializationWriter, seriesSumPostRequestBody: SeriesSumPostRequestBody | undefined = {} as SeriesSumPostRequestBody) : void {
        writer.writeObjectValue<Json>("coefficients", seriesSumPostRequestBody.coefficients, serializeJson);
        writer.writeObjectValue<Json>("m", seriesSumPostRequestBody.m, serializeJson);
        writer.writeObjectValue<Json>("n", seriesSumPostRequestBody.n, serializeJson);
        writer.writeObjectValue<Json>("x", seriesSumPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(seriesSumPostRequestBody.additionalData);
}
