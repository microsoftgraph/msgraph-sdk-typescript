import {KeyValuePair} from './keyValuePair';
import {serializeEntity} from './serializeEntity';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceAnnouncementBase(writer: SerializationWriter, serviceAnnouncementBase: ServiceAnnouncementBase | undefined = {} as ServiceAnnouncementBase) : void {
        serializeEntity(writer, serviceAnnouncementBase)
        writer.writeCollectionOfObjectValues<KeyValuePair>("details", serviceAnnouncementBase.details, serializeKeyValuePair);
        writer.writeDateValue("endDateTime", serviceAnnouncementBase.endDateTime);
        writer.writeDateValue("lastModifiedDateTime", serviceAnnouncementBase.lastModifiedDateTime);
        writer.writeDateValue("startDateTime", serviceAnnouncementBase.startDateTime);
        writer.writeStringValue("title", serviceAnnouncementBase.title);
}
