import {deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse} from './deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse';
import {SupportedTimeZonesWithTimeZoneStandardResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedTimeZonesWithTimeZoneStandardResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse;
}
