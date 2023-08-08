import type {Workflow} from '../../../../../models/identityGovernance/workflow';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreateNewVersionPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The workflow property
     */
    workflow?: Workflow | undefined;
}
