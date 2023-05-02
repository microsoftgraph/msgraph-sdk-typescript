import {Admin} from './admin';
import {createEdgeFromDiscriminatorValue} from './createEdgeFromDiscriminatorValue';
import {createServiceAnnouncementFromDiscriminatorValue} from './createServiceAnnouncementFromDiscriminatorValue';
import {createSharepointFromDiscriminatorValue} from './createSharepointFromDiscriminatorValue';
import {Edge} from './edge';
import {serializeEdge} from './serializeEdge';
import {serializeServiceAnnouncement} from './serializeServiceAnnouncement';
import {serializeSharepoint} from './serializeSharepoint';
import {ServiceAnnouncement} from './serviceAnnouncement';
import {Sharepoint} from './sharepoint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdmin(admin: Admin | undefined = {} as Admin) : Record<string, (node: ParseNode) => void> {
    return {
        "edge": n => { admin.edge = n.getObjectValue<Edge>(createEdgeFromDiscriminatorValue); },
        "@odata.type": n => { admin.odataType = n.getStringValue(); },
        "serviceAnnouncement": n => { admin.serviceAnnouncement = n.getObjectValue<ServiceAnnouncement>(createServiceAnnouncementFromDiscriminatorValue); },
        "sharepoint": n => { admin.sharepoint = n.getObjectValue<Sharepoint>(createSharepointFromDiscriminatorValue); },
    }
}
