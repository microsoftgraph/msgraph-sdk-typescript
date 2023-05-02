import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MaxAPostRequestBody} from './maxAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMaxAPostRequestBody(writer: SerializationWriter, maxAPostRequestBody: MaxAPostRequestBody | undefined = {} as MaxAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", maxAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(maxAPostRequestBody.additionalData);
}
