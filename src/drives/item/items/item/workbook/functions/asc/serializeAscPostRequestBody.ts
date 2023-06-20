import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AscPostRequestBody} from './ascPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAscPostRequestBody(ascPostRequestBody: AscPostRequestBody | undefined = {} as AscPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("text", ascPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(ascPostRequestBody.additionalData);
}
