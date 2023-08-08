import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TypePostRequestBody} from './typePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTypePostRequestBody(writer: SerializationWriter, typePostRequestBody: TypePostRequestBody | undefined = {} as TypePostRequestBody) : void {
        writer.writeObjectValue<Json>("value", typePostRequestBody.value, serializeJson);
        writer.writeAdditionalData(typePostRequestBody.additionalData);
}
