import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type MroundPostRequestBody } from './mroundPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMroundPostRequestBody(writer: SerializationWriter, mroundPostRequestBody: MroundPostRequestBody | undefined = {} as MroundPostRequestBody) : void {
        writer.writeObjectValue<Json>("multiple", mroundPostRequestBody.multiple, serializeJson);
        writer.writeObjectValue<Json>("number", mroundPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(mroundPostRequestBody.additionalData);
}
