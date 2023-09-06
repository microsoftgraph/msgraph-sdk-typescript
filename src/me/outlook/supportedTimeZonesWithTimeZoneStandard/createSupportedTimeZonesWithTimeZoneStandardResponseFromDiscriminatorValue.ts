import { deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse } from './deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse';
import { type SupportedTimeZonesWithTimeZoneStandardResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSupportedTimeZonesWithTimeZoneStandardResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse;
}
