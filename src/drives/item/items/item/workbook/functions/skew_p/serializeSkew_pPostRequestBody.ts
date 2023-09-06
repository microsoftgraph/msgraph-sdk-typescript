import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Skew_pPostRequestBody } from './skew_pPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSkew_pPostRequestBody(writer: SerializationWriter, skew_pPostRequestBody: Skew_pPostRequestBody | undefined = {} as Skew_pPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", skew_pPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(skew_pPostRequestBody.additionalData);
}
