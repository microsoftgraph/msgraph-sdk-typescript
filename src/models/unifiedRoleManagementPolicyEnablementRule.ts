import {UnifiedRoleManagementPolicyRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyEnablementRule extends UnifiedRoleManagementPolicyRule implements Parsable {
    /** The collection of rules that are enabled for this policy rule. For example, MultiFactorAuthentication, Ticketing, and Justification. */
    private _enabledRules?: string[] | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyEnablementRule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the enabledRules property value. The collection of rules that are enabled for this policy rule. For example, MultiFactorAuthentication, Ticketing, and Justification.
     * @returns a string
     */
    public get enabledRules() {
        return this._enabledRules;
    };
    /**
     * Sets the enabledRules property value. The collection of rules that are enabled for this policy rule. For example, MultiFactorAuthentication, Ticketing, and Justification.
     * @param value Value to set for the enabledRules property.
     */
    public set enabledRules(value: string[] | undefined) {
        this._enabledRules = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "enabledRules": n => { this.enabledRules = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("enabledRules", this.enabledRules);
    };
}
