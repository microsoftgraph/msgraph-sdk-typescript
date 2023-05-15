import {AvailabilityItem} from './availabilityItem';
import {createAvailabilityItemFromDiscriminatorValue} from './createAvailabilityItemFromDiscriminatorValue';
import {serializeAvailabilityItem} from './serializeAvailabilityItem';
import {StaffAvailabilityItem} from './staffAvailabilityItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStaffAvailabilityItem(staffAvailabilityItem: StaffAvailabilityItem | undefined = {} as StaffAvailabilityItem) : Record<string, (node: ParseNode) => void> {
    return {
        "availabilityItems": n => { staffAvailabilityItem.availabilityItems = n.getCollectionOfObjectValues<AvailabilityItem>(createAvailabilityItemFromDiscriminatorValue); },
        "@odata.type": n => { staffAvailabilityItem.odataType = n.getStringValue(); },
        "staffId": n => { staffAvailabilityItem.staffId = n.getStringValue(); },
    }
}
