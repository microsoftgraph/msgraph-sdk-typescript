import { type AvailabilityItem } from './availabilityItem';
import { serializeAvailabilityItem } from './serializeAvailabilityItem';
import { type StaffAvailabilityItem } from './staffAvailabilityItem';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStaffAvailabilityItem(writer: SerializationWriter, staffAvailabilityItem: StaffAvailabilityItem | undefined = {} as StaffAvailabilityItem) : void {
        writer.writeCollectionOfObjectValues<AvailabilityItem>("availabilityItems", staffAvailabilityItem.availabilityItems, serializeAvailabilityItem);
        writer.writeStringValue("@odata.type", staffAvailabilityItem.odataType);
        writer.writeStringValue("staffId", staffAvailabilityItem.staffId);
        writer.writeAdditionalData(staffAvailabilityItem.additionalData);
}
