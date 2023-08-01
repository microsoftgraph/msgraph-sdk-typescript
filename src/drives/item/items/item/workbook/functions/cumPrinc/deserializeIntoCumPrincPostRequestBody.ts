import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CumPrincPostRequestBody} from './cumPrincPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCumPrincPostRequestBody(cumPrincPostRequestBody: CumPrincPostRequestBody | undefined = {} as CumPrincPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endPeriod": n => { cumPrincPostRequestBody.endPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { cumPrincPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { cumPrincPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { cumPrincPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startPeriod": n => { cumPrincPostRequestBody.startPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { cumPrincPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
