import {AppliedConditionalAccessPolicyResult} from './appliedConditionalAccessPolicyResult';

export interface AppliedConditionalAccessPolicy{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Name of the conditional access policy. */
    displayName?:string | undefined;
    /** Refers to the grant controls enforced by the conditional access policy (example: 'Require multi-factor authentication'). */
    enforcedGrantControls?:string[] | undefined;
    /** Refers to the session controls enforced by the conditional access policy (example: 'Require app enforced controls'). */
    enforcedSessionControls?:string[] | undefined;
    /** Identifier of the conditional access policy. */
    id?:string | undefined;
    /** Indicates the result of the CA policy that was triggered. Possible values are: success, failure, notApplied (Policy isn't applied because policy conditions were not met),notEnabled (This is due to the policy in disabled state), unknown, unknownFutureValue, reportOnlySuccess, reportOnlyFailure, reportOnlyNotApplied, reportOnlyInterrupted. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values in this evolvable enum: reportOnlySuccess, reportOnlyFailure, reportOnlyNotApplied, reportOnlyInterrupted. */
    result?:AppliedConditionalAccessPolicyResult | undefined;
}
