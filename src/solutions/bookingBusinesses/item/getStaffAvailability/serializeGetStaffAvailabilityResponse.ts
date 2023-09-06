import { serializeBaseCollectionPaginationCountResponse } from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeStaffAvailabilityItem } from '../../../../models/serializeStaffAvailabilityItem';
import { type StaffAvailabilityItem } from '../../../../models/staffAvailabilityItem';
import { type GetStaffAvailabilityResponse } from './getStaffAvailabilityResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetStaffAvailabilityResponse(writer: SerializationWriter, getStaffAvailabilityResponse: GetStaffAvailabilityResponse | undefined = {} as GetStaffAvailabilityResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getStaffAvailabilityResponse)
        writer.writeCollectionOfObjectValues<StaffAvailabilityItem>("value", getStaffAvailabilityResponse.value, serializeStaffAvailabilityItem);
}
