import {Artifact} from './artifact';
import {HostComponent} from './hostComponent';
import {HostCookie} from './hostCookie';
import {HostReputation} from './hostReputation';
import {HostTracker} from './hostTracker';
import {PassiveDnsRecord} from './passiveDnsRecord';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Host extends Artifact, Parsable {
    /**
     * The hostComponents that are associated with this host.
     */
    components?: HostComponent[] | undefined;
    /**
     * The hostCookies that are associated with this host.
     */
    cookies?: HostCookie[] | undefined;
    /**
     * The first date and time this host was observed. The timestamp type represents date and time information using ISO 8601 format and is always in UTC. For example, midnight UTC on Jan 1, 2014, is 2014-01-01T00:00:00Z.
     */
    firstSeenDateTime?: Date | undefined;
    /**
     * The most recent date and time when this host was observed. The timestamp type represents date and time information using ISO 8601 format and is always in UTC. For example, midnight UTC on Jan 1, 2014, is 2014-01-01T00:00:00Z.
     */
    lastSeenDateTime?: Date | undefined;
    /**
     * Passive DNS retrieval about this host.
     */
    passiveDns?: PassiveDnsRecord[] | undefined;
    /**
     * Reverse passive DNS retrieval about this host.
     */
    passiveDnsReverse?: PassiveDnsRecord[] | undefined;
    /**
     * Represents a calculated reputation of this host.
     */
    reputation?: HostReputation | undefined;
    /**
     * The hostTrackers that are associated with this host.
     */
    trackers?: HostTracker[] | undefined;
}
