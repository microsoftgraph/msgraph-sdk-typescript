import type {CustomTaskExtensionCallbackData} from '../../../../../../../../../models/identityGovernance/customTaskExtensionCallbackData';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResumePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The data property
     */
    data?: CustomTaskExtensionCallbackData | undefined;
    /**
     * The source property
     */
    source?: string | undefined;
    /**
     * The type property
     */
    type?: string | undefined;
}
