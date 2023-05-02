import {GetPresencesByUserIdPostRequestBody} from './getPresencesByUserIdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPresencesByUserIdPostRequestBody(getPresencesByUserIdPostRequestBody: GetPresencesByUserIdPostRequestBody | undefined = {} as GetPresencesByUserIdPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { getPresencesByUserIdPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
