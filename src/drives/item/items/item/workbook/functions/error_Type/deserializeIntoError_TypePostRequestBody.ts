import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Error_TypePostRequestBody } from './error_TypePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoError_TypePostRequestBody(error_TypePostRequestBody: Error_TypePostRequestBody | undefined = {} as Error_TypePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "errorVal": n => { error_TypePostRequestBody.errorVal = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
