import {createHostComponentFromDiscriminatorValue} from './createHostComponentFromDiscriminatorValue';
import {createHostCookieFromDiscriminatorValue} from './createHostCookieFromDiscriminatorValue';
import {createHostReputationFromDiscriminatorValue} from './createHostReputationFromDiscriminatorValue';
import {createHostTrackerFromDiscriminatorValue} from './createHostTrackerFromDiscriminatorValue';
import {createPassiveDnsRecordFromDiscriminatorValue} from './createPassiveDnsRecordFromDiscriminatorValue';
import {deserializeIntoArtifact} from './deserializeIntoArtifact';
import type {Host} from './host';
import type {HostComponent} from './hostComponent';
import type {HostCookie} from './hostCookie';
import type {HostReputation} from './hostReputation';
import type {HostTracker} from './hostTracker';
import type {PassiveDnsRecord} from './passiveDnsRecord';
import {serializeHostComponent} from './serializeHostComponent';
import {serializeHostCookie} from './serializeHostCookie';
import {serializeHostReputation} from './serializeHostReputation';
import {serializeHostTracker} from './serializeHostTracker';
import {serializePassiveDnsRecord} from './serializePassiveDnsRecord';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHost(host: Host | undefined = {} as Host) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoArtifact(host),
        "components": n => { host.components = n.getCollectionOfObjectValues<HostComponent>(createHostComponentFromDiscriminatorValue); },
        "cookies": n => { host.cookies = n.getCollectionOfObjectValues<HostCookie>(createHostCookieFromDiscriminatorValue); },
        "firstSeenDateTime": n => { host.firstSeenDateTime = n.getDateValue(); },
        "lastSeenDateTime": n => { host.lastSeenDateTime = n.getDateValue(); },
        "passiveDns": n => { host.passiveDns = n.getCollectionOfObjectValues<PassiveDnsRecord>(createPassiveDnsRecordFromDiscriminatorValue); },
        "passiveDnsReverse": n => { host.passiveDnsReverse = n.getCollectionOfObjectValues<PassiveDnsRecord>(createPassiveDnsRecordFromDiscriminatorValue); },
        "reputation": n => { host.reputation = n.getObjectValue<HostReputation>(createHostReputationFromDiscriminatorValue); },
        "trackers": n => { host.trackers = n.getCollectionOfObjectValues<HostTracker>(createHostTrackerFromDiscriminatorValue); },
    }
}
