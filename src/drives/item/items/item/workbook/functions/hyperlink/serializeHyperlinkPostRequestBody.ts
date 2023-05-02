import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {HyperlinkPostRequestBody} from './hyperlinkPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHyperlinkPostRequestBody(writer: SerializationWriter, hyperlinkPostRequestBody: HyperlinkPostRequestBody | undefined = {} as HyperlinkPostRequestBody) : void {
        writer.writeObjectValue<Json>("friendlyName", hyperlinkPostRequestBody.friendlyName, serializeJson);
        writer.writeObjectValue<Json>("linkLocation", hyperlinkPostRequestBody.linkLocation, serializeJson);
        writer.writeAdditionalData(hyperlinkPostRequestBody.additionalData);
}
