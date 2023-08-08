import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsErrorPostRequestBody} from './isErrorPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsErrorPostRequestBody(writer: SerializationWriter, isErrorPostRequestBody: IsErrorPostRequestBody | undefined = {} as IsErrorPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isErrorPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isErrorPostRequestBody.additionalData);
}
