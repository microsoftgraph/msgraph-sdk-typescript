import type {SynchronizationSecretKeyStringValuePair} from '../../../../../../models/synchronizationSecretKeyStringValuePair';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ValidateCredentialsPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The applicationIdentifier property
     */
    applicationIdentifier?: string | undefined;
    /**
     * The credentials property
     */
    credentials?: SynchronizationSecretKeyStringValuePair[] | undefined;
    /**
     * The templateId property
     */
    templateId?: string | undefined;
    /**
     * The useSavedCredentials property
     */
    useSavedCredentials?: boolean | undefined;
}
