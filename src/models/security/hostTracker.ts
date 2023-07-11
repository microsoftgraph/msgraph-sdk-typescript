import {Artifact} from './artifact';
import {Host} from './host';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HostTracker extends Artifact, Parsable {
    /**
     * The first date and time when this hostTracker was observed by Microsoft Defender Threat Intelligence. The timestamp type represents date and time information using ISO 8601 format and is always in UTC. For example, midnight UTC on Jan 1, 2014, is 2014-01-01T00:00:00Z.
     */
    firstSeenDateTime?: Date | undefined;
    /**
     * The host property
     */
    host?: Host | undefined;
    /**
     * The kind of hostTracker that was detected. For example, GoogleAnalyticsID or JarmHash.
     */
    kind?: string | undefined;
    /**
     * The most recent date and time when this hostTracker was observed by Microsoft Defender Threat Intelligence. The timestamp type represents date and time information using ISO 8601 format and is always in UTC. For example, midnight UTC on Jan 1, 2014, is 2014-01-01T00:00:00Z.
     */
    lastSeenDateTime?: Date | undefined;
    /**
     * The identification value for the hostTracker.
     */
    value?: string | undefined;
}
