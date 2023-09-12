import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SechPostRequestBody } from './sechPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSechPostRequestBody(writer: SerializationWriter, sechPostRequestBody: SechPostRequestBody | undefined = {} as SechPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sechPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sechPostRequestBody.additionalData);
}
