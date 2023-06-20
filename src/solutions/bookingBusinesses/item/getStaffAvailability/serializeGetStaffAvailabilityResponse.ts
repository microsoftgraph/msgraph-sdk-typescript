import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeStaffAvailabilityItem} from '../../../../models/serializeStaffAvailabilityItem';
import {StaffAvailabilityItem} from '../../../../models/staffAvailabilityItem';
import {GetStaffAvailabilityResponse} from './getStaffAvailabilityResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetStaffAvailabilityResponse(getStaffAvailabilityResponse: GetStaffAvailabilityResponse | undefined = {} as GetStaffAvailabilityResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getStaffAvailabilityResponse)
        writer.writeCollectionOfObjectValues<StaffAvailabilityItem>("value", getStaffAvailabilityResponse.value, serializeStaffAvailabilityItem);
}
