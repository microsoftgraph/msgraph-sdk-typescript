import type {GetPresencesByUserIdPostRequestBody} from './getPresencesByUserIdPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPresencesByUserIdPostRequestBody(getPresencesByUserIdPostRequestBody: GetPresencesByUserIdPostRequestBody | undefined = {} as GetPresencesByUserIdPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { getPresencesByUserIdPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
