import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {OrPostRequestBody} from './orPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrPostRequestBody(writer: SerializationWriter, orPostRequestBody: OrPostRequestBody | undefined = {} as OrPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", orPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(orPostRequestBody.additionalData);
}
