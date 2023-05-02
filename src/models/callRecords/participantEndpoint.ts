import {IdentitySet} from '../identitySet';
import {Endpoint} from './endpoint';
import {UserFeedback} from './userFeedback';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantEndpoint extends Endpoint, Parsable {
    /** The feedback provided by the user of this endpoint about the quality of the session. */
    feedback?: UserFeedback | undefined;
    /** Identity associated with the endpoint. */
    identity?: IdentitySet | undefined;
}
