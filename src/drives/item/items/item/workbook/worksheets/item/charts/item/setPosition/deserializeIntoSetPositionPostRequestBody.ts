import { createJsonFromDiscriminatorValue } from '../../../../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../../../../models/json';
import { serializeJson } from '../../../../../../../../../../models/serializeJson';
import { type SetPositionPostRequestBody } from './setPositionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetPositionPostRequestBody(setPositionPostRequestBody: SetPositionPostRequestBody | undefined = {} as SetPositionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endCell": n => { setPositionPostRequestBody.endCell = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startCell": n => { setPositionPostRequestBody.startCell = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
