import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Bin2DecPostRequestBody} from './bin2DecPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBin2DecPostRequestBody(bin2DecPostRequestBody: Bin2DecPostRequestBody | undefined = {} as Bin2DecPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", bin2DecPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(bin2DecPostRequestBody.additionalData);
}
