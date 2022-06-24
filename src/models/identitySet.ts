import {Identity} from './identity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentitySet extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Optional. The application associated with this action. */
    application?: Identity | undefined;
    /** Optional. The device associated with this action. */
    device?: Identity | undefined;
    /** Optional. The user associated with this action. */
    user?: Identity | undefined;
}
