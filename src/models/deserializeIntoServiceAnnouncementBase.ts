import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {KeyValuePair} from './keyValuePair';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import type {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
