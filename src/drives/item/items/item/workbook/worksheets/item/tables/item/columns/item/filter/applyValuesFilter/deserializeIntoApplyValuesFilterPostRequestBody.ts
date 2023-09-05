import { createJsonFromDiscriminatorValue } from '../../../../../../../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../../../../../../../models/json';
import { serializeJson } from '../../../../../../../../../../../../../models/serializeJson';
import { type ApplyValuesFilterPostRequestBody } from './applyValuesFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyValuesFilterPostRequestBody(applyValuesFilterPostRequestBody: ApplyValuesFilterPostRequestBody | undefined = {} as ApplyValuesFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { applyValuesFilterPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
