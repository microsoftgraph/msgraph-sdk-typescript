import {EventMessageDetail} from './eventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageDetail(eventMessageDetail: EventMessageDetail | undefined = {} as EventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { eventMessageDetail.odataType = n.getStringValue(); },
    }
}
