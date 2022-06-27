import {Entity} from './entity';
import {UserFlowType} from './userFlowType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlow extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The userFlowType property */
    userFlowType?: UserFlowType | undefined;
    /** The userFlowTypeVersion property */
    userFlowTypeVersion?: number | undefined;
}
