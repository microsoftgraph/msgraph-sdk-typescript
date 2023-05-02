import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CharPostRequestBody} from './charPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCharPostRequestBody(writer: SerializationWriter, charPostRequestBody: CharPostRequestBody | undefined = {} as CharPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", charPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(charPostRequestBody.additionalData);
}
