import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DiscPostRequestBody } from './discPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDiscPostRequestBody(writer: SerializationWriter, discPostRequestBody: DiscPostRequestBody | undefined = {} as DiscPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", discPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("maturity", discPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("pr", discPostRequestBody.pr, serializeJson);
        writer.writeObjectValue<Json>("redemption", discPostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", discPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(discPostRequestBody.additionalData);
}
