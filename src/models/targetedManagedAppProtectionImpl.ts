import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {ManagedAppProtectionImpl, TargetedManagedAppPolicyAssignmentImpl} from './index';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {TargetedManagedAppProtection} from './targetedManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Policy used to configure detailed management settings targeted to specific security groups */
export class TargetedManagedAppProtectionImpl extends ManagedAppProtectionImpl implements Parsable, TargetedManagedAppProtection {
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    public assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    public isAssigned?: boolean | undefined;
    /**
     * Instantiates a new targetedManagedAppProtection and sets the default values.
     * @param targetedManagedAppProtectionParameterValue 
     */
    public constructor(targetedManagedAppProtectionParameterValue?: TargetedManagedAppProtection | undefined) {
        super();
        this.assignments = targetedManagedAppProtectionParameterValue?.assignments ;
        this.isAssigned = targetedManagedAppProtectionParameterValue?.isAssigned ;
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
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new TargetedManagedAppPolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.isAssigned){
        writer.writeBooleanValue("isAssigned", this.isAssigned);
        }
    };
}
