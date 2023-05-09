import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {NotPostRequestBody} from './notPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotPostRequestBody(writer: SerializationWriter, notPostRequestBody: NotPostRequestBody | undefined = {} as NotPostRequestBody) : void {
        writer.writeObjectValue<Json>("logical", notPostRequestBody.logical, serializeJson);
        writer.writeAdditionalData(notPostRequestBody.additionalData);
}
