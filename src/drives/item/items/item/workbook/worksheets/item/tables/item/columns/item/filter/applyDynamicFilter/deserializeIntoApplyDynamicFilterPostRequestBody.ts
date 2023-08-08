import type {ApplyDynamicFilterPostRequestBody} from './applyDynamicFilterPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyDynamicFilterPostRequestBody(applyDynamicFilterPostRequestBody: ApplyDynamicFilterPostRequestBody | undefined = {} as ApplyDynamicFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { applyDynamicFilterPostRequestBody.criteria = n.getStringValue(); },
    }
}
