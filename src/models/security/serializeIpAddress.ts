import {AutonomousSystem} from './autonomousSystem';
import {IpAddress} from './ipAddress';
import {serializeAutonomousSystem} from './serializeAutonomousSystem';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpAddress(writer: SerializationWriter, ipAddress: IpAddress | undefined = {} as IpAddress) : void {
        serializeHost(writer, ipAddress)
        writer.writeObjectValue<AutonomousSystem>("autonomousSystem", ipAddress.autonomousSystem, serializeAutonomousSystem);
        writer.writeStringValue("countryOrRegion", ipAddress.countryOrRegion);
        writer.writeStringValue("hostingProvider", ipAddress.hostingProvider);
        writer.writeStringValue("netblock", ipAddress.netblock);
}
