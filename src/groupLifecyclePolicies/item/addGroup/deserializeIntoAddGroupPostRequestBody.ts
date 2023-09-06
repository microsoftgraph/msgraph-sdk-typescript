import { type AddGroupPostRequestBody } from './addGroupPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAddGroupPostRequestBody(addGroupPostRequestBody: AddGroupPostRequestBody | undefined = {} as AddGroupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { addGroupPostRequestBody.groupId = n.getStringValue(); },
    }
}
