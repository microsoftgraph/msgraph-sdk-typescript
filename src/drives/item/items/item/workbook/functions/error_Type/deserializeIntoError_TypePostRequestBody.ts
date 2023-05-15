import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Error_TypePostRequestBody} from './error_TypePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoError_TypePostRequestBody(error_TypePostRequestBody: Error_TypePostRequestBody | undefined = {} as Error_TypePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "errorVal": n => { error_TypePostRequestBody.errorVal = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
