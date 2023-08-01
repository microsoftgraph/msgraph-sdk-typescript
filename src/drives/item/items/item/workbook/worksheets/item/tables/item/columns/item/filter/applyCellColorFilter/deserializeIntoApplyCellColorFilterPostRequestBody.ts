import type {ApplyCellColorFilterPostRequestBody} from './applyCellColorFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyCellColorFilterPostRequestBody(applyCellColorFilterPostRequestBody: ApplyCellColorFilterPostRequestBody | undefined = {} as ApplyCellColorFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { applyCellColorFilterPostRequestBody.color = n.getStringValue(); },
    }
}
