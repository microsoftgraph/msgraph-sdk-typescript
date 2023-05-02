import {CheckMemberObjectsPostRequestBody} from './checkMemberObjectsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberObjectsPostRequestBody(checkMemberObjectsPostRequestBody: CheckMemberObjectsPostRequestBody | undefined = {} as CheckMemberObjectsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { checkMemberObjectsPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
