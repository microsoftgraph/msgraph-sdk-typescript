import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {HyperlinkPostRequestBody} from './hyperlinkPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHyperlinkPostRequestBody(hyperlinkPostRequestBody: HyperlinkPostRequestBody | undefined = {} as HyperlinkPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("friendlyName", hyperlinkPostRequestBody.friendlyName, serializeJson);
        writer.writeObjectValue<Json>("linkLocation", hyperlinkPostRequestBody.linkLocation, serializeJson);
        writer.writeAdditionalData(hyperlinkPostRequestBody.additionalData);
}
