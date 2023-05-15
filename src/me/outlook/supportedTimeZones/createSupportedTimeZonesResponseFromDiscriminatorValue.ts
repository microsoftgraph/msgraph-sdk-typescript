import {deserializeIntoSupportedTimeZonesResponse} from './deserializeIntoSupportedTimeZonesResponse';
import {SupportedTimeZonesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedTimeZonesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSupportedTimeZonesResponse;
}
