import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeAssignmentCollectionResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: IdentityUserFlowAttributeAssignment[] | undefined;
}
