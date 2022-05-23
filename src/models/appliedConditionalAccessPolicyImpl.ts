import {AppliedConditionalAccessPolicy} from './appliedConditionalAccessPolicy';
import {AppliedConditionalAccessPolicyResult} from './appliedConditionalAccessPolicyResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppliedConditionalAccessPolicyImpl implements AdditionalDataHolder, AppliedConditionalAccessPolicy, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name of the conditional access policy. */
    public displayName?: string | undefined;
    /** Refers to the grant controls enforced by the conditional access policy (example: 'Require multi-factor authentication'). */
    public enforcedGrantControls?: string[] | undefined;
    /** Refers to the session controls enforced by the conditional access policy (example: 'Require app enforced controls'). */
    public enforcedSessionControls?: string[] | undefined;
    /** Identifier of the conditional access policy. */
    public id?: string | undefined;
    /** Indicates the result of the CA policy that was triggered. Possible values are: success, failure, notApplied (Policy isn't applied because policy conditions were not met),notEnabled (This is due to the policy in disabled state), unknown, unknownFutureValue, reportOnlySuccess, reportOnlyFailure, reportOnlyNotApplied, reportOnlyInterrupted. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values in this evolvable enum: reportOnlySuccess, reportOnlyFailure, reportOnlyNotApplied, reportOnlyInterrupted. */
    public result?: AppliedConditionalAccessPolicyResult | undefined;
    /**
     * Instantiates a new appliedConditionalAccessPolicy and sets the default values.
     * @param appliedConditionalAccessPolicyParameterValue 
     */
    public constructor(appliedConditionalAccessPolicyParameterValue?: AppliedConditionalAccessPolicy | undefined) {
        this.additionalData = appliedConditionalAccessPolicyParameterValue?.additionalData ? appliedConditionalAccessPolicyParameterValue?.additionalData! : {}
        this.displayName = appliedConditionalAccessPolicyParameterValue?.displayName ;
        this.enforcedGrantControls = appliedConditionalAccessPolicyParameterValue?.enforcedGrantControls ;
        this.enforcedSessionControls = appliedConditionalAccessPolicyParameterValue?.enforcedSessionControls ;
        this.id = appliedConditionalAccessPolicyParameterValue?.id ;
        this.result = appliedConditionalAccessPolicyParameterValue?.result ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "enforcedGrantControls": n => { this.enforcedGrantControls = n.getCollectionOfPrimitiveValues<string>(); },
            "enforcedSessionControls": n => { this.enforcedSessionControls = n.getCollectionOfPrimitiveValues<string>(); },
            "id": n => { this.id = n.getStringValue(); },
            "result": n => { this.result = n.getEnumValue<AppliedConditionalAccessPolicyResult>(AppliedConditionalAccessPolicyResult); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.enforcedGrantControls){
        writer.writeCollectionOfPrimitiveValues<string>("enforcedGrantControls", this.enforcedGrantControls);
        }
        if(this.enforcedSessionControls){
        writer.writeCollectionOfPrimitiveValues<string>("enforcedSessionControls", this.enforcedSessionControls);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.result){
        writer.writeEnumValue<AppliedConditionalAccessPolicyResult>("result", this.result);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
