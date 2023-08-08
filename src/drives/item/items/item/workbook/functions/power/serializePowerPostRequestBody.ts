import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {PowerPostRequestBody} from './powerPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePowerPostRequestBody(writer: SerializationWriter, powerPostRequestBody: PowerPostRequestBody | undefined = {} as PowerPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", powerPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("power", powerPostRequestBody.power, serializeJson);
        writer.writeAdditionalData(powerPostRequestBody.additionalData);
}
