import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LogNorm_DistPostRequestBody } from './logNorm_DistPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLogNorm_DistPostRequestBody(writer: SerializationWriter, logNorm_DistPostRequestBody: LogNorm_DistPostRequestBody | undefined = {} as LogNorm_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", logNorm_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("mean", logNorm_DistPostRequestBody.mean, serializeJson);
        writer.writeObjectValue<Json>("standardDev", logNorm_DistPostRequestBody.standardDev, serializeJson);
        writer.writeObjectValue<Json>("x", logNorm_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(logNorm_DistPostRequestBody.additionalData);
}
