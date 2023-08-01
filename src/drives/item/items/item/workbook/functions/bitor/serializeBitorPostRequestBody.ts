import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BitorPostRequestBody} from './bitorPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitorPostRequestBody(writer: SerializationWriter, bitorPostRequestBody: BitorPostRequestBody | undefined = {} as BitorPostRequestBody) : void {
        writer.writeObjectValue<Json>("number1", bitorPostRequestBody.number1, serializeJson);
        writer.writeObjectValue<Json>("number2", bitorPostRequestBody.number2, serializeJson);
        writer.writeAdditionalData(bitorPostRequestBody.additionalData);
}
