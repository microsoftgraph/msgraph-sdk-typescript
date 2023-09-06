import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsErrorPostRequestBody } from './isErrorPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIsErrorPostRequestBody(isErrorPostRequestBody: IsErrorPostRequestBody | undefined = {} as IsErrorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isErrorPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
