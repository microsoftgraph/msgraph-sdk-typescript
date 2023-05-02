import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ProperPostRequestBody} from './properPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProperPostRequestBody(writer: SerializationWriter, properPostRequestBody: ProperPostRequestBody | undefined = {} as ProperPostRequestBody) : void {
        writer.writeObjectValue<Json>("text", properPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(properPostRequestBody.additionalData);
}
