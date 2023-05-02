import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MaxPostRequestBody} from './maxPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMaxPostRequestBody(writer: SerializationWriter, maxPostRequestBody: MaxPostRequestBody | undefined = {} as MaxPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", maxPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(maxPostRequestBody.additionalData);
}
