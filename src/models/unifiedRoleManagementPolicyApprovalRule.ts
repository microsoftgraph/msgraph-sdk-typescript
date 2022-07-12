import {createApprovalSettingsFromDiscriminatorValue} from './createApprovalSettingsFromDiscriminatorValue';
import {ApprovalSettings, UnifiedRoleManagementPolicyRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyApprovalRule extends UnifiedRoleManagementPolicyRule implements Parsable {
    /** The settings for approval of the role assignment. */
    private _setting?: ApprovalSettings | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyApprovalRule and sets the default values.
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
            "setting": n => { this.setting = n.getObjectValue<ApprovalSettings>(createApprovalSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ApprovalSettings>("setting", this.setting);
    };
    /**
     * Gets the setting property value. The settings for approval of the role assignment.
     * @returns a approvalSettings
     */
    public get setting() {
        return this._setting;
    };
    /**
     * Sets the setting property value. The settings for approval of the role assignment.
     * @param value Value to set for the setting property.
     */
    public set setting(value: ApprovalSettings | undefined) {
        this._setting = value;
    };
}
