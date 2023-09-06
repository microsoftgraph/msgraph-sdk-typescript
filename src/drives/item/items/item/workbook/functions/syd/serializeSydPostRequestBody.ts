import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SydPostRequestBody } from './sydPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSydPostRequestBody(writer: SerializationWriter, sydPostRequestBody: SydPostRequestBody | undefined = {} as SydPostRequestBody) : void {
        writer.writeObjectValue<Json>("cost", sydPostRequestBody.cost, serializeJson);
        writer.writeObjectValue<Json>("life", sydPostRequestBody.life, serializeJson);
        writer.writeObjectValue<Json>("per", sydPostRequestBody.per, serializeJson);
        writer.writeObjectValue<Json>("salvage", sydPostRequestBody.salvage, serializeJson);
        writer.writeAdditionalData(sydPostRequestBody.additionalData);
}
