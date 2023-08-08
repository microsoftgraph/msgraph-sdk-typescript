import type {CheckMemberObjectsPostRequestBody} from './checkMemberObjectsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberObjectsPostRequestBody(checkMemberObjectsPostRequestBody: CheckMemberObjectsPostRequestBody | undefined = {} as CheckMemberObjectsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { checkMemberObjectsPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
