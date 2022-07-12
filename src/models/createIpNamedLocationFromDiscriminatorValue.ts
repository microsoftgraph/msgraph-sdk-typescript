import {IpNamedLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpNamedLocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IpNamedLocation();
}
