import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SubstitutePostRequestBody } from './substitutePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubstitutePostRequestBody(substitutePostRequestBody: SubstitutePostRequestBody | undefined = {} as SubstitutePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "instanceNum": n => { substitutePostRequestBody.instanceNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "newText": n => { substitutePostRequestBody.newText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "oldText": n => { substitutePostRequestBody.oldText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { substitutePostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
