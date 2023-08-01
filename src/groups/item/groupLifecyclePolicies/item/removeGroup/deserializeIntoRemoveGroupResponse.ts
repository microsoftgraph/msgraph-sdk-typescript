import type {RemoveGroupResponse} from './removeGroupResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveGroupResponse(removeGroupResponse: RemoveGroupResponse | undefined = {} as RemoveGroupResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { removeGroupResponse.value = n.getBooleanValue(); },
    }
}
