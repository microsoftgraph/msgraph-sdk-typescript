import {SupportedTimeZonesResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedTimeZonesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SupportedTimeZonesResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SupportedTimeZonesResponseImpl();
}
