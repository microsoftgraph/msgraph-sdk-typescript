import {IdentityUserFlowAttributeDataType} from './identityUserFlowAttributeDataType';
import {IdentityUserFlowAttributeType} from './identityUserFlowAttributeType';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class IdentityUserFlowAttribute extends Entity implements Parsable {
    /** The dataType property */
    private _dataType?: IdentityUserFlowAttributeDataType | undefined;
    /** The description of the user flow attribute that's shown to the user at the time of sign-up. */
    private _description?: string | undefined;
    /** The display name of the user flow attribute. */
    private _displayName?: string | undefined;
    /** The userFlowAttributeType property */
    private _userFlowAttributeType?: IdentityUserFlowAttributeType | undefined;
    /**
     * Instantiates a new identityUserFlowAttribute and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the dataType property value. The dataType property
     * @returns a identityUserFlowAttributeDataType
     */
    public get dataType() {
        return this._dataType;
    };
    /**
     * Sets the dataType property value. The dataType property
     * @param value Value to set for the dataType property.
     */
    public set dataType(value: IdentityUserFlowAttributeDataType | undefined) {
        this._dataType = value;
    };
    /**
     * Gets the description property value. The description of the user flow attribute that's shown to the user at the time of sign-up.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the user flow attribute that's shown to the user at the time of sign-up.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name of the user flow attribute.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the user flow attribute.
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
            "dataType": n => { this.dataType = n.getEnumValue<IdentityUserFlowAttributeDataType>(IdentityUserFlowAttributeDataType); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "userFlowAttributeType": n => { this.userFlowAttributeType = n.getEnumValue<IdentityUserFlowAttributeType>(IdentityUserFlowAttributeType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<IdentityUserFlowAttributeDataType>("dataType", this.dataType);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<IdentityUserFlowAttributeType>("userFlowAttributeType", this.userFlowAttributeType);
    };
    /**
     * Gets the userFlowAttributeType property value. The userFlowAttributeType property
     * @returns a identityUserFlowAttributeType
     */
    public get userFlowAttributeType() {
        return this._userFlowAttributeType;
    };
    /**
     * Sets the userFlowAttributeType property value. The userFlowAttributeType property
     * @param value Value to set for the userFlowAttributeType property.
     */
    public set userFlowAttributeType(value: IdentityUserFlowAttributeType | undefined) {
        this._userFlowAttributeType = value;
    };
}
