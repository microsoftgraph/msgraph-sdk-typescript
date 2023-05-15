import {deserializeIntoCustomTimeZone} from './deserializeIntoCustomTimeZone';
import {CustomTimeZone} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomTimeZoneFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomTimeZone;
}
