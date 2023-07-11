import {ManagedMobileApp} from '../../../../../../models/managedMobileApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

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
