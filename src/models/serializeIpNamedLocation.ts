import { type IpNamedLocation } from './ipNamedLocation';
import { type IpRange } from './ipRange';
import { serializeIpRange } from './serializeIpRange';
import { serializeNamedLocation } from './serializeNamedLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIpNamedLocation(writer: SerializationWriter, ipNamedLocation: IpNamedLocation | undefined = {} as IpNamedLocation) : void {
        serializeNamedLocation(writer, ipNamedLocation)
        writer.writeCollectionOfObjectValues<IpRange>("ipRanges", ipNamedLocation.ipRanges, serializeIpRange);
        writer.writeBooleanValue("isTrusted", ipNamedLocation.isTrusted);
}
