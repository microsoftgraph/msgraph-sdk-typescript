import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsErrorPostRequestBody} from './isErrorPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsErrorPostRequestBody(writer: SerializationWriter, isErrorPostRequestBody: IsErrorPostRequestBody | undefined = {} as IsErrorPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", isErrorPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(isErrorPostRequestBody.additionalData);
}
