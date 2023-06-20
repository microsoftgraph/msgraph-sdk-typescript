import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsTextPostRequestBody} from './isTextPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsTextPostRequestBody(isTextPostRequestBody: IsTextPostRequestBody | undefined = {} as IsTextPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("value", isTextPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isTextPostRequestBody.additionalData);
}
