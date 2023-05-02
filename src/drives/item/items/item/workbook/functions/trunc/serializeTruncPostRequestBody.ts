import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TruncPostRequestBody} from './truncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTruncPostRequestBody(writer: SerializationWriter, truncPostRequestBody: TruncPostRequestBody | undefined = {} as TruncPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", truncPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numDigits", truncPostRequestBody.numDigits, serializeJson);
        writer.writeAdditionalData(truncPostRequestBody.additionalData);
}
