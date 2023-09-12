import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type UsdollarPostRequestBody } from './usdollarPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUsdollarPostRequestBody(usdollarPostRequestBody: UsdollarPostRequestBody | undefined = {} as UsdollarPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "decimals": n => { usdollarPostRequestBody.decimals = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { usdollarPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
