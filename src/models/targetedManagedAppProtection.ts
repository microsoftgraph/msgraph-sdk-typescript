import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {ManagedAppProtection, TargetedManagedAppPolicyAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetedManagedAppProtection extends ManagedAppProtection implements Parsable {
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    private _assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    private _isAssigned?: boolean | undefined;
    /** The type property */
    private _type?: string | undefined;
    /**
     * Gets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @returns a targetedManagedAppPolicyAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: TargetedManagedAppPolicyAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Instantiates a new TargetedManagedAppProtection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
            "isAssigned": n => { this.isAssigned = n.getBooleanValue(); },
            "@odata.type": n => { this.type = n.getStringValue(); },
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
        this._isAssigned = value;
    };
    /**
     * Gets the @odata.type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the @odata.type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignment>("assignments", this.assignments);
        writer.writeBooleanValue("isAssigned", this.isAssigned);
        writer.writeStringValue("@odata.type", this.type);
    };
}
