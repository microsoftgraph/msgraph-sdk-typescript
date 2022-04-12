import {createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue';
import {Entity, UnifiedRoleManagementPolicyRuleTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyRule extends Entity implements Parsable {
    /** The target for the policy rule.  */
    private _target?: UnifiedRoleManagementPolicyRuleTarget | undefined;
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
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UnifiedRoleManagementPolicyRuleTarget>("target", this.target);
    };
    /**
     * Gets the target property value. The target for the policy rule.
     * @returns a unifiedRoleManagementPolicyRuleTarget
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The target for the policy rule.
     * @param value Value to set for the target property.
     */
    public set target(value: UnifiedRoleManagementPolicyRuleTarget | undefined) {
        this._target = value;
    };
}
