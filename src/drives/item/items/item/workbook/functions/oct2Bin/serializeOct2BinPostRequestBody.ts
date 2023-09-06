import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Oct2BinPostRequestBody } from './oct2BinPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOct2BinPostRequestBody(writer: SerializationWriter, oct2BinPostRequestBody: Oct2BinPostRequestBody | undefined = {} as Oct2BinPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", oct2BinPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", oct2BinPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(oct2BinPostRequestBody.additionalData);
}
