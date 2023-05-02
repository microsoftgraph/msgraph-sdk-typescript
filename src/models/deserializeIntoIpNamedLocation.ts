import {createIpRangeFromDiscriminatorValue} from './createIpRangeFromDiscriminatorValue';
import {deserializeIntoNamedLocation} from './deserializeIntoNamedLocation';
import {IpNamedLocation} from './ipNamedLocation';
import {IpRange} from './ipRange';
import {serializeIpRange} from './serializeIpRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIpNamedLocation(ipNamedLocation: IpNamedLocation | undefined = {} as IpNamedLocation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoNamedLocation(ipNamedLocation),
        "ipRanges": n => { ipNamedLocation.ipRanges = n.getCollectionOfObjectValues<IpRange>(createIpRangeFromDiscriminatorValue); },
        "isTrusted": n => { ipNamedLocation.isTrusted = n.getBooleanValue(); },
    }
}
