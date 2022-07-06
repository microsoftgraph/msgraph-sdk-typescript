import {createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue';
import {Entity, UnifiedRoleManagementPolicyRuleTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class UnifiedRoleManagementPolicyRule extends Entity implements Parsable {
    /** Not implemented. Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne). */
    private _target?: UnifiedRoleManagementPolicyRuleTarget | undefined;
    /** The type property */
    private _type?: string | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyRule and sets the default values.
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
            "target": n => { this.target = n.getObjectValue<UnifiedRoleManagementPolicyRuleTarget>(createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue); },
            "@odata.type": n => { this.type = n.getStringValue(); },
        };
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
        writer.writeObjectValue<UnifiedRoleManagementPolicyRuleTarget>("target", this.target);
        writer.writeStringValue("@odata.type", this.type);
    };
    /**
     * Gets the target property value. Not implemented. Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne).
     * @returns a unifiedRoleManagementPolicyRuleTarget
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Not implemented. Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne).
     * @param value Value to set for the target property.
     */
    public set target(value: UnifiedRoleManagementPolicyRuleTarget | undefined) {
        this._target = value;
    };
}
