import { deserializeIntoDaylightTimeZoneOffset } from './deserializeIntoDaylightTimeZoneOffset';
import { type DaylightTimeZoneOffset } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDaylightTimeZoneOffsetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDaylightTimeZoneOffset;
}
