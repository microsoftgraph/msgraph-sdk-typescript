import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type UpperPostRequestBody } from './upperPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUpperPostRequestBody(writer: SerializationWriter, upperPostRequestBody: UpperPostRequestBody | undefined = {} as UpperPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", upperPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(upperPostRequestBody.additionalData);
}
