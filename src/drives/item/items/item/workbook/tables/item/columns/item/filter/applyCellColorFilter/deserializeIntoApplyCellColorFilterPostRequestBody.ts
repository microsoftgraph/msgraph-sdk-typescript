import { type ApplyCellColorFilterPostRequestBody } from './applyCellColorFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyCellColorFilterPostRequestBody(applyCellColorFilterPostRequestBody: ApplyCellColorFilterPostRequestBody | undefined = {} as ApplyCellColorFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { applyCellColorFilterPostRequestBody.color = n.getStringValue(); },
    }
}
