import { type UnfavoriteResponse } from './unfavoriteResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnfavoriteResponse(unfavoriteResponse: UnfavoriteResponse | undefined = {} as UnfavoriteResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { unfavoriteResponse.value = n.getBooleanValue(); },
    }
}
