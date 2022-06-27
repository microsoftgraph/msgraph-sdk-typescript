import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityCustomUserFlowAttribute extends Partial<AdditionalDataHolder>, IdentityUserFlowAttribute, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
