import {AddGroupResponse} from './addGroupResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddGroupResponse(addGroupResponse: AddGroupResponse | undefined = {} as AddGroupResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { addGroupResponse.value = n.getBooleanValue(); },
    }
}
