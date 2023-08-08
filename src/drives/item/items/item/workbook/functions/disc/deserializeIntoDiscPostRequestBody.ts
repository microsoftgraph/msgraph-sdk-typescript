import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DiscPostRequestBody} from './discPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDiscPostRequestBody(discPostRequestBody: DiscPostRequestBody | undefined = {} as DiscPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { discPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { discPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { discPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { discPostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { discPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
