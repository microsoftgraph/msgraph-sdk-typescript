import { deserializeIntoCustomTimeZone } from './deserializeIntoCustomTimeZone';
import { type CustomTimeZone } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomTimeZoneFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomTimeZone;
}
