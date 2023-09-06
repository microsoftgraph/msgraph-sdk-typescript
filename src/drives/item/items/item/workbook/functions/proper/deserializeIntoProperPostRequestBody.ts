import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ProperPostRequestBody } from './properPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProperPostRequestBody(properPostRequestBody: ProperPostRequestBody | undefined = {} as ProperPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { properPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
