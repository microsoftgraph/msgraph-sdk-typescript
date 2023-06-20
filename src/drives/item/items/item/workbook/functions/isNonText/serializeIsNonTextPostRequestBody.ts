import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsNonTextPostRequestBody} from './isNonTextPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsNonTextPostRequestBody(isNonTextPostRequestBody: IsNonTextPostRequestBody | undefined = {} as IsNonTextPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("value", isNonTextPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isNonTextPostRequestBody.additionalData);
}
