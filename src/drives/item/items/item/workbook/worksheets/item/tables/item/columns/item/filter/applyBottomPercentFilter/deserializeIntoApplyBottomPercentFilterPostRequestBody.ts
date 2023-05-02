import {ApplyBottomPercentFilterPostRequestBody} from './applyBottomPercentFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyBottomPercentFilterPostRequestBody(applyBottomPercentFilterPostRequestBody: ApplyBottomPercentFilterPostRequestBody | undefined = {} as ApplyBottomPercentFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "percent": n => { applyBottomPercentFilterPostRequestBody.percent = n.getNumberValue(); },
    }
}
