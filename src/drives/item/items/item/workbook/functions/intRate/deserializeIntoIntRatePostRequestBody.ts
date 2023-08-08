import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IntRatePostRequestBody} from './intRatePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntRatePostRequestBody(intRatePostRequestBody: IntRatePostRequestBody | undefined = {} as IntRatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { intRatePostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "investment": n => { intRatePostRequestBody.investment = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { intRatePostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { intRatePostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { intRatePostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
