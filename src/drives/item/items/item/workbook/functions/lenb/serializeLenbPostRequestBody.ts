import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LenbPostRequestBody} from './lenbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLenbPostRequestBody(lenbPostRequestBody: LenbPostRequestBody | undefined = {} as LenbPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("text", lenbPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(lenbPostRequestBody.additionalData);
}
