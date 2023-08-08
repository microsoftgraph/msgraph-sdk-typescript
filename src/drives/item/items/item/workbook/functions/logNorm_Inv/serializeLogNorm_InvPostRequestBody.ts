import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LogNorm_InvPostRequestBody} from './logNorm_InvPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLogNorm_InvPostRequestBody(writer: SerializationWriter, logNorm_InvPostRequestBody: LogNorm_InvPostRequestBody | undefined = {} as LogNorm_InvPostRequestBody) : void {
        writer.writeObjectValue<Json>("mean", logNorm_InvPostRequestBody.mean, serializeJson);
        writer.writeObjectValue<Json>("probability", logNorm_InvPostRequestBody.probability, serializeJson);
        writer.writeObjectValue<Json>("standardDev", logNorm_InvPostRequestBody.standardDev, serializeJson);
        writer.writeAdditionalData(logNorm_InvPostRequestBody.additionalData);
}
