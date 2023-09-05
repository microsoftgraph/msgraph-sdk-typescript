import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type HyperlinkPostRequestBody } from './hyperlinkPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHyperlinkPostRequestBody(writer: SerializationWriter, hyperlinkPostRequestBody: HyperlinkPostRequestBody | undefined = {} as HyperlinkPostRequestBody) : void {
        writer.writeObjectValue<Json>("friendlyName", hyperlinkPostRequestBody.friendlyName, serializeJson);
        writer.writeObjectValue<Json>("linkLocation", hyperlinkPostRequestBody.linkLocation, serializeJson);
        writer.writeAdditionalData(hyperlinkPostRequestBody.additionalData);
}
