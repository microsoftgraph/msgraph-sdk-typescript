import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type BitrshiftPostRequestBody } from './bitrshiftPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBitrshiftPostRequestBody(writer: SerializationWriter, bitrshiftPostRequestBody: BitrshiftPostRequestBody | undefined = {} as BitrshiftPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", bitrshiftPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("shiftAmount", bitrshiftPostRequestBody.shiftAmount, serializeJson);
        writer.writeAdditionalData(bitrshiftPostRequestBody.additionalData);
}
