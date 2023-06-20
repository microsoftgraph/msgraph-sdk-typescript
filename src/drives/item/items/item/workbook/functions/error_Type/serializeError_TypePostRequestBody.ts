import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Error_TypePostRequestBody} from './error_TypePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeError_TypePostRequestBody(error_TypePostRequestBody: Error_TypePostRequestBody | undefined = {} as Error_TypePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("errorVal", error_TypePostRequestBody.errorVal, serializeJson);
        writer.writeAdditionalData(error_TypePostRequestBody.additionalData);
}
