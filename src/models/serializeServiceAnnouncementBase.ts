import { type KeyValuePair } from './keyValuePair';
import { serializeEntity } from './serializeEntity';
import { serializeKeyValuePair } from './serializeKeyValuePair';
import { type ServiceAnnouncementBase } from './serviceAnnouncementBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeServiceAnnouncementBase(writer: SerializationWriter, serviceAnnouncementBase: ServiceAnnouncementBase | undefined = {} as ServiceAnnouncementBase) : void {
        serializeEntity(writer, serviceAnnouncementBase)
        writer.writeCollectionOfObjectValues<KeyValuePair>("details", serviceAnnouncementBase.details, serializeKeyValuePair);
        writer.writeDateValue("endDateTime", serviceAnnouncementBase.endDateTime);
        writer.writeDateValue("lastModifiedDateTime", serviceAnnouncementBase.lastModifiedDateTime);
        writer.writeDateValue("startDateTime", serviceAnnouncementBase.startDateTime);
        writer.writeStringValue("title", serviceAnnouncementBase.title);
}
