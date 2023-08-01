import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Norm_DistPostRequestBody} from './norm_DistPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNorm_DistPostRequestBody(writer: SerializationWriter, norm_DistPostRequestBody: Norm_DistPostRequestBody | undefined = {} as Norm_DistPostRequestBody) : void {
        writer.writeObjectValue<Json>("cumulative", norm_DistPostRequestBody.cumulative, serializeJson);
        writer.writeObjectValue<Json>("mean", norm_DistPostRequestBody.mean, serializeJson);
        writer.writeObjectValue<Json>("standardDev", norm_DistPostRequestBody.standardDev, serializeJson);
        writer.writeObjectValue<Json>("x", norm_DistPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(norm_DistPostRequestBody.additionalData);
}
