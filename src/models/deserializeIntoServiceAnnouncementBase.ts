import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {KeyValuePair} from './keyValuePair';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncementBase(serviceAnnouncementBase: ServiceAnnouncementBase | undefined = {} as ServiceAnnouncementBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(serviceAnnouncementBase),
        "details": n => { serviceAnnouncementBase.details = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "endDateTime": n => { serviceAnnouncementBase.endDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { serviceAnnouncementBase.lastModifiedDateTime = n.getDateValue(); },
        "startDateTime": n => { serviceAnnouncementBase.startDateTime = n.getDateValue(); },
        "title": n => { serviceAnnouncementBase.title = n.getStringValue(); },
    }
}
