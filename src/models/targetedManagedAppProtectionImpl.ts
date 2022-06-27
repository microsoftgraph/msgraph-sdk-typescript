import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {ManagedAppProtectionImpl, TargetedManagedAppPolicyAssignmentImpl} from './index';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {TargetedManagedAppProtection} from './targetedManagedAppProtection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetedManagedAppProtectionImpl extends ManagedAppProtectionImpl implements TargetedManagedAppProtection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    public assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    public isAssigned?: boolean | undefined;
    /**
     * Instantiates a new TargetedManagedAppProtection and sets the default values.
     * @param targetedManagedAppProtectionParameterValue 
     */
    public constructor(targetedManagedAppProtectionParameterValue?: TargetedManagedAppProtection | undefined) {
        super(targetedManagedAppProtectionParameterValue);
        this.additionalData = targetedManagedAppProtectionParameterValue?.additionalData ? targetedManagedAppProtectionParameterValue?.additionalData! : {};
        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = []; targetedManagedAppProtectionParameterValue.assignments?.forEach(element => {assignmentsArrValue.push(element instanceof TargetedManagedAppPolicyAssignmentImpl? element : new TargetedManagedAppPolicyAssignmentImpl(element));});
        this.assignments = assignmentsArrValue;
        this.isAssigned = targetedManagedAppProtectionParameterValue?.isAssigned;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
            "isAssigned": n => { this.isAssigned = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(element instanceof TargetedManagedAppPolicyAssignmentImpl? element : new TargetedManagedAppPolicyAssignmentImpl(element));});
            writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.isAssigned){
            writer.writeBooleanValue("isAssigned", this.isAssigned);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
