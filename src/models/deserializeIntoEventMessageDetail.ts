import type {EventMessageDetail} from './eventMessageDetail';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageDetail(eventMessageDetail: EventMessageDetail | undefined = {} as EventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { eventMessageDetail.odataType = n.getStringValue(); },
    }
}
