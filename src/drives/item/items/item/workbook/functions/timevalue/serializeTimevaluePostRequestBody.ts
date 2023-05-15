import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TimevaluePostRequestBody} from './timevaluePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimevaluePostRequestBody(writer: SerializationWriter, timevaluePostRequestBody: TimevaluePostRequestBody | undefined = {} as TimevaluePostRequestBody) : void {
        writer.writeObjectValue<Json>("timeText", timevaluePostRequestBody.timeText, serializeJson);
        writer.writeAdditionalData(timevaluePostRequestBody.additionalData);
}
