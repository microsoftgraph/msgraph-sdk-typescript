import { type MarkUnreadResponse } from './markUnreadResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkUnreadResponse(markUnreadResponse: MarkUnreadResponse | undefined = {} as MarkUnreadResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { markUnreadResponse.value = n.getBooleanValue(); },
    }
}
