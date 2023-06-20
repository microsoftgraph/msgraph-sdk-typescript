import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MirrPostRequestBody} from './mirrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMirrPostRequestBody(mirrPostRequestBody: MirrPostRequestBody | undefined = {} as MirrPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("financeRate", mirrPostRequestBody.financeRate, serializeJson);
        writer.writeObjectValue<Json>("reinvestRate", mirrPostRequestBody.reinvestRate, serializeJson);
        writer.writeObjectValue<Json>("values", mirrPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(mirrPostRequestBody.additionalData);
}
