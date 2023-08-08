import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CoupPcdPostRequestBody} from './coupPcdPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCoupPcdPostRequestBody(coupPcdPostRequestBody: CoupPcdPostRequestBody | undefined = {} as CoupPcdPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "basis": n => { coupPcdPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { coupPcdPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { coupPcdPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { coupPcdPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
