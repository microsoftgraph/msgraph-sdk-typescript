import {DaylightTimeZoneOffset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDaylightTimeZoneOffsetFromDiscriminatorValue(parseNode: ParseNode | undefined) : DaylightTimeZoneOffset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DaylightTimeZoneOffset();
}
