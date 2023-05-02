import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RomanPostRequestBody} from './romanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRomanPostRequestBody(writer: SerializationWriter, romanPostRequestBody: RomanPostRequestBody | undefined = {} as RomanPostRequestBody) : void {
        writer.writeObjectValue<Json>("form", romanPostRequestBody.form, serializeJson);
        writer.writeObjectValue<Json>("number", romanPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(romanPostRequestBody.additionalData);
}
