import { deserializeIntoDateTimeTimeZone } from './deserializeIntoDateTimeTimeZone';
import { type DateTimeTimeZone } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDateTimeTimeZoneFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDateTimeTimeZone;
}
