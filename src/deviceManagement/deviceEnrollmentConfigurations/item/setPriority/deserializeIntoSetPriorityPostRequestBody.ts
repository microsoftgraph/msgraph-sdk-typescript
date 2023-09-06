import { type SetPriorityPostRequestBody } from './setPriorityPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetPriorityPostRequestBody(setPriorityPostRequestBody: SetPriorityPostRequestBody | undefined = {} as SetPriorityPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "priority": n => { setPriorityPostRequestBody.priority = n.getNumberValue(); },
    }
}
