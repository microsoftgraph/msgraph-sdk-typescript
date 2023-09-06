import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DatevaluePostRequestBody } from './datevaluePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDatevaluePostRequestBody(writer: SerializationWriter, datevaluePostRequestBody: DatevaluePostRequestBody | undefined = {} as DatevaluePostRequestBody) : void {
        writer.writeObjectValue<Json>("dateText", datevaluePostRequestBody.dateText, serializeJson);
        writer.writeAdditionalData(datevaluePostRequestBody.additionalData);
}
