import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FactPostRequestBody } from './factPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFactPostRequestBody(writer: SerializationWriter, factPostRequestBody: FactPostRequestBody | undefined = {} as FactPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", factPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(factPostRequestBody.additionalData);
}
