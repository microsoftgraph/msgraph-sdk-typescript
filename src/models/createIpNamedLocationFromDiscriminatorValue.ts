import { deserializeIntoIpNamedLocation } from './deserializeIntoIpNamedLocation';
import { type IpNamedLocation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIpNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIpNamedLocation;
}
