import { deserializeIntoSupportedTimeZonesResponse } from './deserializeIntoSupportedTimeZonesResponse';
import { type SupportedTimeZonesResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSupportedTimeZonesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSupportedTimeZonesResponse;
}
