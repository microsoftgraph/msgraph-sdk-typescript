import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Norm_InvPostRequestBody} from './norm_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNorm_InvPostRequestBody(writer: SerializationWriter, norm_InvPostRequestBody: Norm_InvPostRequestBody | undefined = {} as Norm_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("mean", norm_InvPostRequestBody.mean, serializeJson);
        writer.writeObjectValue<Json>("probability", norm_InvPostRequestBody.probability, serializeJson);
        writer.writeObjectValue<Json>("standardDev", norm_InvPostRequestBody.standardDev, serializeJson);
        writer.writeAdditionalData(norm_InvPostRequestBody.additionalData);
}
