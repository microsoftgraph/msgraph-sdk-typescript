import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MaxAPostRequestBody} from './maxAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMaxAPostRequestBody(maxAPostRequestBody: MaxAPostRequestBody | undefined = {} as MaxAPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", maxAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(maxAPostRequestBody.additionalData);
}
