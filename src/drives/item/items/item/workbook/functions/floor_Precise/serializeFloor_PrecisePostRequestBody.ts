import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Floor_PrecisePostRequestBody} from './floor_PrecisePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFloor_PrecisePostRequestBody(floor_PrecisePostRequestBody: Floor_PrecisePostRequestBody | undefined = {} as Floor_PrecisePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", floor_PrecisePostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", floor_PrecisePostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(floor_PrecisePostRequestBody.additionalData);
}
