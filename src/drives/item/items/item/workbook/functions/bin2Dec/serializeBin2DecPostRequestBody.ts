import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Bin2DecPostRequestBody} from './bin2DecPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBin2DecPostRequestBody(writer: SerializationWriter, bin2DecPostRequestBody: Bin2DecPostRequestBody | undefined = {} as Bin2DecPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", bin2DecPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(bin2DecPostRequestBody.additionalData);
}
