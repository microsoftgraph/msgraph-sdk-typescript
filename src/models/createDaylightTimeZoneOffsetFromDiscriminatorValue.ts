import {DaylightTimeZoneOffsetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDaylightTimeZoneOffsetFromDiscriminatorValue(parseNode: ParseNode | undefined) : DaylightTimeZoneOffsetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DaylightTimeZoneOffsetImpl();
}
