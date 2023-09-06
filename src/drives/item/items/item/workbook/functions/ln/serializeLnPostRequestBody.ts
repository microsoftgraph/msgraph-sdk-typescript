import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LnPostRequestBody } from './lnPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLnPostRequestBody(writer: SerializationWriter, lnPostRequestBody: LnPostRequestBody | undefined = {} as LnPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", lnPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(lnPostRequestBody.additionalData);
}
