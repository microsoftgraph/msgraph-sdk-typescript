import {SupportedTimeZonesWithTimeZoneStandardResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedTimeZonesWithTimeZoneStandardResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SupportedTimeZonesWithTimeZoneStandardResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SupportedTimeZonesWithTimeZoneStandardResponseImpl();
}
