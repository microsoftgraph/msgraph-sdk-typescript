import {IdentitySet} from '../identitySet';
import {Endpoint} from './endpoint';
import {UserFeedback} from './userFeedback';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantEndpoint extends Partial<AdditionalDataHolder>, Endpoint, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The feedback provided by the user of this endpoint about the quality of the session. */
    feedback?: UserFeedback | undefined;
    /** Identity associated with the endpoint. */
    identity?: IdentitySet | undefined;
}
