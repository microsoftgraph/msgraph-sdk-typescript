import {UnfavoriteResponse} from './unfavoriteResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnfavoriteResponse(unfavoriteResponse: UnfavoriteResponse | undefined = {} as UnfavoriteResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { unfavoriteResponse.value = n.getBooleanValue(); },
    }
}
