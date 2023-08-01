import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MinAPostRequestBody} from './minAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMinAPostRequestBody(writer: SerializationWriter, minAPostRequestBody: MinAPostRequestBody | undefined = {} as MinAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", minAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(minAPostRequestBody.additionalData);
}
