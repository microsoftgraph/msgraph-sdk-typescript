import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BitorPostRequestBody} from './bitorPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitorPostRequestBody(bitorPostRequestBody: BitorPostRequestBody | undefined = {} as BitorPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number1", bitorPostRequestBody.number1, serializeJson);
        writer.writeObjectValue<Json>("number2", bitorPostRequestBody.number2, serializeJson);
        writer.writeAdditionalData(bitorPostRequestBody.additionalData);
}
