import {AddGroupPostRequestBody} from './addGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddGroupPostRequestBody(addGroupPostRequestBody: AddGroupPostRequestBody | undefined = {} as AddGroupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { addGroupPostRequestBody.groupId = n.getStringValue(); },
    }
}
