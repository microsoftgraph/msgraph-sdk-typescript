import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {UsdollarPostRequestBody} from './usdollarPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUsdollarPostRequestBody(usdollarPostRequestBody: UsdollarPostRequestBody | undefined = {} as UsdollarPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "decimals": n => { usdollarPostRequestBody.decimals = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { usdollarPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
