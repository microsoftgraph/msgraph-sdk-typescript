import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TypePostRequestBody} from './typePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTypePostRequestBody(writer: SerializationWriter, typePostRequestBody: TypePostRequestBody | undefined = {} as TypePostRequestBody) : void {
        writer.writeObjectValue<Json>("value", typePostRequestBody.value, serializeJson);
        writer.writeAdditionalData(typePostRequestBody.additionalData);
}
