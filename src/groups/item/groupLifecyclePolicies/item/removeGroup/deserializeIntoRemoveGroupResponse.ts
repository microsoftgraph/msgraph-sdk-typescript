import { type RemoveGroupResponse } from './removeGroupResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveGroupResponse(removeGroupResponse: RemoveGroupResponse | undefined = {} as RemoveGroupResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { removeGroupResponse.value = n.getBooleanValue(); },
    }
}
