import { deserializeIntoTimeZoneInformation } from './deserializeIntoTimeZoneInformation';
import { type TimeZoneInformation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeZoneInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeZoneInformation;
}
