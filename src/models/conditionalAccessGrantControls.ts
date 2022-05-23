
export interface ConditionalAccessGrantControls{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue. */
    builtInControls?:string[] | undefined;
    /** List of custom controls IDs required by the policy. To learn more about custom control, see Custom controls (preview). */
    customAuthenticationFactors?:string[] | undefined;
    /** Defines the relationship of the grant controls. Possible values: AND, OR. */
    operator?:string | undefined;
    /** List of terms of use IDs required by the policy. */
    termsOfUse?:string[] | undefined;
}
