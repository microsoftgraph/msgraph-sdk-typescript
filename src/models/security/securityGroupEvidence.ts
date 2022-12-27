import {AlertEvidence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityGroupEvidence extends AlertEvidence implements Parsable {
    /** The name of the security group. */
    private _displayName?: string | undefined;
    /** Unique identifier of the security group. */
    private _securityGroupId?: string | undefined;
    /**
     * Instantiates a new SecurityGroupEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name of the security group.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the security group.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "securityGroupId": n => { this.securityGroupId = n.getStringValue(); },
        };
    };
    /**
     * Gets the securityGroupId property value. Unique identifier of the security group.
     * @returns a string
     */
    public get securityGroupId() {
        return this._securityGroupId;
    };
    /**
     * Sets the securityGroupId property value. Unique identifier of the security group.
     * @param value Value to set for the securityGroupId property.
     */
    public set securityGroupId(value: string | undefined) {
        this._securityGroupId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("securityGroupId", this.securityGroupId);
    };
}
