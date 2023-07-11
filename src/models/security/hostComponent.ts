import {Artifact} from './artifact';
import {Host} from './host';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HostComponent extends Artifact, Parsable {
    /**
     * The type of component that was detected (for example, Operating System, Framework, Remote Access, or Server).
     */
    category?: string | undefined;
    /**
     * The first date and time when Microsoft Defender Threat Intelligence observed this web component. The timestamp type represents date and time information using ISO 8601 format and is always in UTC. For example, midnight UTC on Jan 1, 2014, is 2014-01-01T00:00:00Z.
     */
    firstSeenDateTime?: Date | undefined;
    /**
     * The host property
     */
    host?: Host | undefined;
    /**
     * The most recent date and time when Microsoft Defender Threat Intelligence observed this web component. The timestamp type represents date and time information using ISO 8601 format and is always in UTC. For example, midnight UTC on Jan 1, 2014, is 2014-01-01T00:00:00Z.
     */
    lastSeenDateTime?: Date | undefined;
    /**
     * A name running on the artifact, for example, Microsoft IIS.
     */
    name?: string | undefined;
    /**
     * The component version running on the artifact, for example, v8.5. This should not be assumed to be strictly numerical.
     */
    version?: string | undefined;
}
