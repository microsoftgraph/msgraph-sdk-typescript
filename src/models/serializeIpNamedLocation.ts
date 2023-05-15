import {IpNamedLocation} from './ipNamedLocation';
import {IpRange} from './ipRange';
import {serializeIpRange} from './serializeIpRange';
import {serializeNamedLocation} from './serializeNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpNamedLocation(writer: SerializationWriter, ipNamedLocation: IpNamedLocation | undefined = {} as IpNamedLocation) : void {
        serializeNamedLocation(writer, ipNamedLocation)
        writer.writeCollectionOfObjectValues<IpRange>("ipRanges", ipNamedLocation.ipRanges, serializeIpRange);
        writer.writeBooleanValue("isTrusted", ipNamedLocation.isTrusted);
}
