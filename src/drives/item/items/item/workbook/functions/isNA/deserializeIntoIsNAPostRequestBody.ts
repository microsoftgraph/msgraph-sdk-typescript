import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsNAPostRequestBody } from './isNAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIsNAPostRequestBody(isNAPostRequestBody: IsNAPostRequestBody | undefined = {} as IsNAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isNAPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
