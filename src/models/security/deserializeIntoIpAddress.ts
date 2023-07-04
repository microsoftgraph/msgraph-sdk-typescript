import {AutonomousSystem} from './autonomousSystem';
import {createAutonomousSystemFromDiscriminatorValue} from './createAutonomousSystemFromDiscriminatorValue';
import {deserializeIntoHost} from './deserializeIntoHost';
import {IpAddress} from './ipAddress';
import {serializeAutonomousSystem} from './serializeAutonomousSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIpAddress(ipAddress: IpAddress | undefined = {} as IpAddress) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoHost(ipAddress),
        "autonomousSystem": n => { ipAddress.autonomousSystem = n.getObjectValue<AutonomousSystem>(createAutonomousSystemFromDiscriminatorValue); },
        "countryOrRegion": n => { ipAddress.countryOrRegion = n.getStringValue(); },
        "hostingProvider": n => { ipAddress.hostingProvider = n.getStringValue(); },
        "netblock": n => { ipAddress.netblock = n.getStringValue(); },
    }
}
