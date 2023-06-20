import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LogNorm_InvPostRequestBody} from './logNorm_InvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLogNorm_InvPostRequestBody(logNorm_InvPostRequestBody: LogNorm_InvPostRequestBody | undefined = {} as LogNorm_InvPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("mean", logNorm_InvPostRequestBody.mean, serializeJson);
        writer.writeObjectValue<Json>("probability", logNorm_InvPostRequestBody.probability, serializeJson);
        writer.writeObjectValue<Json>("standardDev", logNorm_InvPostRequestBody.standardDev, serializeJson);
        writer.writeAdditionalData(logNorm_InvPostRequestBody.additionalData);
}
