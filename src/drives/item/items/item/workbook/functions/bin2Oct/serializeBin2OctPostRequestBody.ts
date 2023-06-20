import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Bin2OctPostRequestBody} from './bin2OctPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBin2OctPostRequestBody(bin2OctPostRequestBody: Bin2OctPostRequestBody | undefined = {} as Bin2OctPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", bin2OctPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("places", bin2OctPostRequestBody.places, serializeJson);
        writer.writeAdditionalData(bin2OctPostRequestBody.additionalData);
}
