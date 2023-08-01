import {createStaffAvailabilityItemFromDiscriminatorValue} from '../../../../models/createStaffAvailabilityItemFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeStaffAvailabilityItem} from '../../../../models/serializeStaffAvailabilityItem';
import type {StaffAvailabilityItem} from '../../../../models/staffAvailabilityItem';
import type {GetStaffAvailabilityResponse} from './getStaffAvailabilityResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetStaffAvailabilityResponse(getStaffAvailabilityResponse: GetStaffAvailabilityResponse | undefined = {} as GetStaffAvailabilityResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getStaffAvailabilityResponse),
        "value": n => { getStaffAvailabilityResponse.value = n.getCollectionOfObjectValues<StaffAvailabilityItem>(createStaffAvailabilityItemFromDiscriminatorValue); },
    }
}
