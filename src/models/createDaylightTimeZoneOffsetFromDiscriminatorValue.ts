import {deserializeIntoDaylightTimeZoneOffset} from './deserializeIntoDaylightTimeZoneOffset';
import {DaylightTimeZoneOffset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDaylightTimeZoneOffsetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDaylightTimeZoneOffset;
}
