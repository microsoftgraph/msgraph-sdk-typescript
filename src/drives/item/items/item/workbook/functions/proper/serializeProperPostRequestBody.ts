import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ProperPostRequestBody } from './properPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProperPostRequestBody(writer: SerializationWriter, properPostRequestBody: ProperPostRequestBody | undefined = {} as ProperPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", properPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(properPostRequestBody.additionalData);
}
