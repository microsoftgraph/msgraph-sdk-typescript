import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {UpperPostRequestBody} from './upperPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpperPostRequestBody(writer: SerializationWriter, upperPostRequestBody: UpperPostRequestBody | undefined = {} as UpperPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", upperPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(upperPostRequestBody.additionalData);
}
