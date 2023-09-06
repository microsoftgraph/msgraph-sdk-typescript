import { type UnarchiveResponse } from './unarchiveResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnarchiveResponse(unarchiveResponse: UnarchiveResponse | undefined = {} as UnarchiveResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { unarchiveResponse.value = n.getBooleanValue(); },
    }
}
