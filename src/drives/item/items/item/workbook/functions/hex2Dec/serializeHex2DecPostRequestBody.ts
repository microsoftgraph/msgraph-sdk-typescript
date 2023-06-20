import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Hex2DecPostRequestBody} from './hex2DecPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHex2DecPostRequestBody(hex2DecPostRequestBody: Hex2DecPostRequestBody | undefined = {} as Hex2DecPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", hex2DecPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(hex2DecPostRequestBody.additionalData);
}
