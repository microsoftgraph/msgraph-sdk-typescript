import {AuthenticationMethodFeature} from './authenticationMethodFeature';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserRegistrationFeatureCount extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The feature property
     */
    feature?: AuthenticationMethodFeature | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Number of users.
     */
    userCount?: number | undefined;
}
