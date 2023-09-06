import { type ManagedMobileApp } from '../../../../models/managedMobileApp';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface TargetAppsPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The apps property
     */
    apps?: ManagedMobileApp[] | undefined;
}
