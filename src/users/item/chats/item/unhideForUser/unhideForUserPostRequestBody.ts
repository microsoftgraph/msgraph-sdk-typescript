import {TeamworkUserIdentity} from '../../../../../models/teamworkUserIdentity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnhideForUserPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The user property */
    user?: TeamworkUserIdentity | undefined;
}
