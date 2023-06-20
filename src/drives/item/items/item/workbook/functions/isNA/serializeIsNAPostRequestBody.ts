import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsNAPostRequestBody} from './isNAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsNAPostRequestBody(isNAPostRequestBody: IsNAPostRequestBody | undefined = {} as IsNAPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("value", isNAPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isNAPostRequestBody.additionalData);
}
