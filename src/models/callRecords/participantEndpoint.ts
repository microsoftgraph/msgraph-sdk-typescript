import {IdentitySet} from '../identitySet';
import {Endpoint} from './endpoint';
import {UserFeedback} from './userFeedback';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantEndpoint extends Endpoint, Parsable {
    /**
     * CPU number of cores used by the media endpoint.
     */
    cpuCoresCount?: number | undefined;
    /**
     * CPU name used by the media endpoint.
     */
    cpuName?: string | undefined;
    /**
     * CPU processor speed used by the media endpoint.
     */
    cpuProcessorSpeedInMhz?: number | undefined;
    /**
     * The feedback provided by the user of this endpoint about the quality of the session.
     */
    feedback?: UserFeedback | undefined;
    /**
     * Identity associated with the endpoint.
     */
    identity?: IdentitySet | undefined;
    /**
     * Name of the device used by the media endpoint.
     */
    name?: string | undefined;
}
