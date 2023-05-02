import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoupDayBsPostRequestBody} from './coupDayBsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCoupDayBsPostRequestBody(coupDayBsPostRequestBody: CoupDayBsPostRequestBody | undefined = {} as CoupDayBsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { coupDayBsPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { coupDayBsPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { coupDayBsPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { coupDayBsPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
