import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CoupNcdPostRequestBody} from './coupNcdPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCoupNcdPostRequestBody(coupNcdPostRequestBody: CoupNcdPostRequestBody | undefined = {} as CoupNcdPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { coupNcdPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { coupNcdPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { coupNcdPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { coupNcdPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
