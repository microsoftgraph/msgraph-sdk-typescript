import {Artifact} from './artifact';
import {Host} from './host';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PassiveDnsRecord extends Artifact, Parsable {
    /**
     * The artifact property
     */
    artifact?: Artifact | undefined;
    /**
     * The date and time that this passiveDnsRecord entry was collected by Microsoft. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    collectedDateTime?: Date | undefined;
    /**
     * The date and time when this passiveDnsRecord entry was first seen. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    firstSeenDateTime?: Date | undefined;
    /**
     * The date and time when this passiveDnsRecord entry was most recently seen. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastSeenDateTime?: Date | undefined;
    /**
     * The parentHost property
     */
    parentHost?: Host | undefined;
    /**
     * The DNS record type for this passiveDnsRecord entry.
     */
    recordType?: string | undefined;
}
