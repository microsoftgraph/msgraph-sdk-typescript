import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {ManagedAppProtectionImpl, TargetedManagedAppPolicyAssignmentImpl} from './index';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {TargetedManagedAppProtection} from './targetedManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetedManagedAppProtectionImpl extends ManagedAppProtectionImpl implements TargetedManagedAppProtection {
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    private _assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    private _isAssigned?: boolean | undefined;
    /**
     * Gets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @returns a TargetedManagedAppPolicyAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: TargetedManagedAppPolicyAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof TargetedManagedAppPolicyAssignmentImpl? element as TargetedManagedAppPolicyAssignmentImpl:new TargetedManagedAppPolicyAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Instantiates a new TargetedManagedAppProtection and sets the default values.
     * @param targetedManagedAppProtectionParameterValue 
     */
    public constructor(targetedManagedAppProtectionParameterValue?: TargetedManagedAppProtection | undefined) {
        super(targetedManagedAppProtectionParameterValue);
        this._assignments = targetedManagedAppProtectionParameterValue?.assignments;
        this._isAssigned = targetedManagedAppProtectionParameterValue?.isAssigned;
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
     * Gets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @returns a boolean
     */
    public get isAssigned() {
        return this._isAssigned;
    };
    /**
     * Sets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @param value Value to set for the isAssigned property.
     */
    public set isAssigned(value: boolean | undefined) {
        if(value) {
            this._isAssigned = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof TargetedManagedAppPolicyAssignmentImpl? element as TargetedManagedAppPolicyAssignmentImpl:new TargetedManagedAppPolicyAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.isAssigned){
            writer.writeBooleanValue("isAssigned", this.isAssigned);
        }
    };
}
