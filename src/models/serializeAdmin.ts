import { type Admin } from './admin';
import { type Edge } from './edge';
import { serializeEdge } from './serializeEdge';
import { serializeServiceAnnouncement } from './serializeServiceAnnouncement';
import { serializeSharepoint } from './serializeSharepoint';
import { type ServiceAnnouncement } from './serviceAnnouncement';
import { type Sharepoint } from './sharepoint';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAdmin(writer: SerializationWriter, admin: Admin | undefined = {} as Admin) : void {
        writer.writeObjectValue<Edge>("edge", admin.edge, serializeEdge);
        writer.writeStringValue("@odata.type", admin.odataType);
        writer.writeObjectValue<ServiceAnnouncement>("serviceAnnouncement", admin.serviceAnnouncement, serializeServiceAnnouncement);
        writer.writeObjectValue<Sharepoint>("sharepoint", admin.sharepoint, serializeSharepoint);
        writer.writeAdditionalData(admin.additionalData);
}
