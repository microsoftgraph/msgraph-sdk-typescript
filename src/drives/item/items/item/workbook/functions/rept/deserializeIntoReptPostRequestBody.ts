import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ReptPostRequestBody } from './reptPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoReptPostRequestBody(reptPostRequestBody: ReptPostRequestBody | undefined = {} as ReptPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "numberTimes": n => { reptPostRequestBody.numberTimes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "text": n => { reptPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
