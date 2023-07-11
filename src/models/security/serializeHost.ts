import {Host} from './host';
import {HostComponent} from './hostComponent';
import {HostCookie} from './hostCookie';
import {HostReputation} from './hostReputation';
import {HostTracker} from './hostTracker';
import {PassiveDnsRecord} from './passiveDnsRecord';
import {serializeArtifact} from './serializeArtifact';
import {serializeHostComponent} from './serializeHostComponent';
import {serializeHostCookie} from './serializeHostCookie';
import {serializeHostReputation} from './serializeHostReputation';
import {serializeHostTracker} from './serializeHostTracker';
import {serializePassiveDnsRecord} from './serializePassiveDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHost(writer: SerializationWriter, host: Host | undefined = {} as Host) : void {
        serializeArtifact(writer, host)
        writer.writeCollectionOfObjectValues<HostComponent>("components", host.components, serializeHostComponent);
        writer.writeCollectionOfObjectValues<HostCookie>("cookies", host.cookies, serializeHostCookie);
        writer.writeDateValue("firstSeenDateTime", host.firstSeenDateTime);
        writer.writeDateValue("lastSeenDateTime", host.lastSeenDateTime);
        writer.writeCollectionOfObjectValues<PassiveDnsRecord>("passiveDns", host.passiveDns, serializePassiveDnsRecord);
        writer.writeCollectionOfObjectValues<PassiveDnsRecord>("passiveDnsReverse", host.passiveDnsReverse, serializePassiveDnsRecord);
        writer.writeObjectValue<HostReputation>("reputation", host.reputation, serializeHostReputation);
        writer.writeCollectionOfObjectValues<HostTracker>("trackers", host.trackers, serializeHostTracker);
}
