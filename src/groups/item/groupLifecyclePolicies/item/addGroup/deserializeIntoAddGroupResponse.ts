import { type AddGroupResponse } from './addGroupResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAddGroupResponse(addGroupResponse: AddGroupResponse | undefined = {} as AddGroupResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { addGroupResponse.value = n.getBooleanValue(); },
    }
}
