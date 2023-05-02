import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsLogicalPostRequestBody} from './isLogicalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsLogicalPostRequestBody(writer: SerializationWriter, isLogicalPostRequestBody: IsLogicalPostRequestBody | undefined = {} as IsLogicalPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isLogicalPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isLogicalPostRequestBody.additionalData);
}
