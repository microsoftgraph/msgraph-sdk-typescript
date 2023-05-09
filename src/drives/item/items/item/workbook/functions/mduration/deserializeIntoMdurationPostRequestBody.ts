import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MdurationPostRequestBody} from './mdurationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMdurationPostRequestBody(mdurationPostRequestBody: MdurationPostRequestBody | undefined = {} as MdurationPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { mdurationPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "coupon": n => { mdurationPostRequestBody.coupon = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { mdurationPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { mdurationPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { mdurationPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { mdurationPostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
