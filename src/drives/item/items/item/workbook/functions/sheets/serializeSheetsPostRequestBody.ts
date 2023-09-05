import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SheetsPostRequestBody } from './sheetsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSheetsPostRequestBody(writer: SerializationWriter, sheetsPostRequestBody: SheetsPostRequestBody | undefined = {} as SheetsPostRequestBody) : void {
        writer.writeObjectValue<Json>("reference", sheetsPostRequestBody.reference, serializeJson);
        writer.writeAdditionalData(sheetsPostRequestBody.additionalData);
}
