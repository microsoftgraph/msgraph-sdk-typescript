import type {ApplyTopPercentFilterPostRequestBody} from './applyTopPercentFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyTopPercentFilterPostRequestBody(applyTopPercentFilterPostRequestBody: ApplyTopPercentFilterPostRequestBody | undefined = {} as ApplyTopPercentFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "percent": n => { applyTopPercentFilterPostRequestBody.percent = n.getNumberValue(); },
    }
}
