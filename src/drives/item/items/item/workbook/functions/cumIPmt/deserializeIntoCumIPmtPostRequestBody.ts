import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CumIPmtPostRequestBody} from './cumIPmtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCumIPmtPostRequestBody(cumIPmtPostRequestBody: CumIPmtPostRequestBody | undefined = {} as CumIPmtPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endPeriod": n => { cumIPmtPostRequestBody.endPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { cumIPmtPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { cumIPmtPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { cumIPmtPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startPeriod": n => { cumIPmtPostRequestBody.startPeriod = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { cumIPmtPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
