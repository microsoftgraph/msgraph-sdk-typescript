import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {StDevAPostRequestBody} from './stDevAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStDevAPostRequestBody(writer: SerializationWriter, stDevAPostRequestBody: StDevAPostRequestBody | undefined = {} as StDevAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", stDevAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(stDevAPostRequestBody.additionalData);
}
