import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ReptPostRequestBody} from './reptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReptPostRequestBody(writer: SerializationWriter, reptPostRequestBody: ReptPostRequestBody | undefined = {} as ReptPostRequestBody) : void {
        writer.writeObjectValue<Json>("numberTimes", reptPostRequestBody.numberTimes, serializeJson);
        writer.writeObjectValue<Json>("text", reptPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(reptPostRequestBody.additionalData);
}
