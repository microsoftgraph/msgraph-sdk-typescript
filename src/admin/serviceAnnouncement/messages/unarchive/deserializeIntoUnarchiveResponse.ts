import type {UnarchiveResponse} from './unarchiveResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnarchiveResponse(unarchiveResponse: UnarchiveResponse | undefined = {} as UnarchiveResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { unarchiveResponse.value = n.getBooleanValue(); },
    }
}
