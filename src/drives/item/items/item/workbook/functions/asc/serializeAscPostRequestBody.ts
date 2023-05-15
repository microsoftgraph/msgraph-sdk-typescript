import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AscPostRequestBody} from './ascPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAscPostRequestBody(writer: SerializationWriter, ascPostRequestBody: AscPostRequestBody | undefined = {} as AscPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", ascPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(ascPostRequestBody.additionalData);
}
