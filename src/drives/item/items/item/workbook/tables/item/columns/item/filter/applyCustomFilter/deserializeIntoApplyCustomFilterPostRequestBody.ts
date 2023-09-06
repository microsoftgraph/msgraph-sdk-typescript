import { type ApplyCustomFilterPostRequestBody } from './applyCustomFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyCustomFilterPostRequestBody(applyCustomFilterPostRequestBody: ApplyCustomFilterPostRequestBody | undefined = {} as ApplyCustomFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria1": n => { applyCustomFilterPostRequestBody.criteria1 = n.getStringValue(); },
        "criteria2": n => { applyCustomFilterPostRequestBody.criteria2 = n.getStringValue(); },
        "oper": n => { applyCustomFilterPostRequestBody.oper = n.getStringValue(); },
    }
}
