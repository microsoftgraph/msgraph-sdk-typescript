import {ContentTypeOrder} from './contentTypeOrder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeOrder(contentTypeOrder: ContentTypeOrder | undefined = {} as ContentTypeOrder) : Record<string, (node: ParseNode) => void> {
    return {
        "default": n => { contentTypeOrder.defaultEscaped = n.getBooleanValue(); },
        "@odata.type": n => { contentTypeOrder.odataType = n.getStringValue(); },
        "position": n => { contentTypeOrder.position = n.getNumberValue(); },
    }
}
