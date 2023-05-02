import {ServiceUpdateMessageViewpoint} from './serviceUpdateMessageViewpoint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceUpdateMessageViewpoint(serviceUpdateMessageViewpoint: ServiceUpdateMessageViewpoint | undefined = {} as ServiceUpdateMessageViewpoint) : Record<string, (node: ParseNode) => void> {
    return {
        "isArchived": n => { serviceUpdateMessageViewpoint.isArchived = n.getBooleanValue(); },
        "isFavorited": n => { serviceUpdateMessageViewpoint.isFavorited = n.getBooleanValue(); },
        "isRead": n => { serviceUpdateMessageViewpoint.isRead = n.getBooleanValue(); },
        "@odata.type": n => { serviceUpdateMessageViewpoint.odataType = n.getStringValue(); },
    }
}
