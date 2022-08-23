import {SubjectSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttributeRuleMembers extends SubjectSet implements Parsable {
    /** A description of the membership rule. */
    private _description?: string | undefined;
    /** Determines the allowed target users for this policy. For more information about the syntax of the membership rule, see Membership Rules syntax. */
    private _membershipRule?: string | undefined;
    /**
     * Instantiates a new AttributeRuleMembers and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.attributeRuleMembers";
    };
    /**
     * Gets the description property value. A description of the membership rule.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A description of the membership rule.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "membershipRule": n => { this.membershipRule = n.getStringValue(); },
        };
    };
    /**
     * Gets the membershipRule property value. Determines the allowed target users for this policy. For more information about the syntax of the membership rule, see Membership Rules syntax.
     * @returns a string
     */
    public get membershipRule() {
        return this._membershipRule;
    };
    /**
     * Sets the membershipRule property value. Determines the allowed target users for this policy. For more information about the syntax of the membership rule, see Membership Rules syntax.
     * @param value Value to set for the membershipRule property.
     */
    public set membershipRule(value: string | undefined) {
        this._membershipRule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("membershipRule", this.membershipRule);
    };
}
