import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {ConditionalAccessGrantControl} from './conditionalAccessGrantControl';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessGrantControls extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The authenticationStrength property
     */
    authenticationStrength?: AuthenticationStrengthPolicy | undefined;
    /**
     * List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue.
     */
    builtInControls?: ConditionalAccessGrantControl[] | undefined;
    /**
     * List of custom controls IDs required by the policy. For more information, see Custom controls.
     */
    customAuthenticationFactors?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Defines the relationship of the grant controls. Possible values: AND, OR.
     */
    operator?: string | undefined;
    /**
     * List of terms of use IDs required by the policy.
     */
    termsOfUse?: string[] | undefined;
}
