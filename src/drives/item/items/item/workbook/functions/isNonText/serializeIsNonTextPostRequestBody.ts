import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsNonTextPostRequestBody} from './isNonTextPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsNonTextPostRequestBody(writer: SerializationWriter, isNonTextPostRequestBody: IsNonTextPostRequestBody | undefined = {} as IsNonTextPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isNonTextPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isNonTextPostRequestBody.additionalData);
}
