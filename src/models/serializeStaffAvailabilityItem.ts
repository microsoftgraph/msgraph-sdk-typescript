import {AvailabilityItem} from './availabilityItem';
import {serializeAvailabilityItem} from './serializeAvailabilityItem';
import {StaffAvailabilityItem} from './staffAvailabilityItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStaffAvailabilityItem(writer: SerializationWriter, staffAvailabilityItem: StaffAvailabilityItem | undefined = {} as StaffAvailabilityItem) : void {
        writer.writeCollectionOfObjectValues<AvailabilityItem>("availabilityItems", staffAvailabilityItem.availabilityItems, serializeAvailabilityItem);
        writer.writeStringValue("@odata.type", staffAvailabilityItem.odataType);
        writer.writeStringValue("staffId", staffAvailabilityItem.staffId);
        writer.writeAdditionalData(staffAvailabilityItem.additionalData);
}
