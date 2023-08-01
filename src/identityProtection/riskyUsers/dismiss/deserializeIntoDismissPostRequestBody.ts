import type {DismissPostRequestBody} from './dismissPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDismissPostRequestBody(dismissPostRequestBody: DismissPostRequestBody | undefined = {} as DismissPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "userIds": n => { dismissPostRequestBody.userIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
