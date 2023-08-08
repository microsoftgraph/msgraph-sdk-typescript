import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Error_TypePostRequestBody} from './error_TypePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeError_TypePostRequestBody(writer: SerializationWriter, error_TypePostRequestBody: Error_TypePostRequestBody | undefined = {} as Error_TypePostRequestBody) : void {
        writer.writeObjectValue<Json>("errorVal", error_TypePostRequestBody.errorVal, serializeJson);
        writer.writeAdditionalData(error_TypePostRequestBody.additionalData);
}
