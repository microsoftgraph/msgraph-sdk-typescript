import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {EdatePostRequestBody} from './edatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdatePostRequestBody(writer: SerializationWriter, edatePostRequestBody: EdatePostRequestBody | undefined = {} as EdatePostRequestBody) : void {
        writer.writeObjectValue<Json>("months", edatePostRequestBody.months, serializeJson);
        writer.writeObjectValue<Json>("startDate", edatePostRequestBody.startDate, serializeJson);
        writer.writeAdditionalData(edatePostRequestBody.additionalData);
}
