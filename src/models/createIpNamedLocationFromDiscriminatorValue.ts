import {IpNamedLocationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpNamedLocationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IpNamedLocationImpl();
}
