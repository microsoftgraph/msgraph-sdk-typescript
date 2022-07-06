import {Entity} from './index';
import {UserFlowType} from './userFlowType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityUserFlow extends Entity implements Parsable {
    /** The type property */
    private _type?: string | undefined;
    /** The userFlowType property */
    private _userFlowType?: UserFlowType | undefined;
    /** The userFlowTypeVersion property */
    private _userFlowTypeVersion?: number | undefined;
    /**
     * Instantiates a new IdentityUserFlow and sets the default values.
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
            "@odata.type": n => { this.type = n.getStringValue(); },
            "userFlowType": n => { this.userFlowType = n.getEnumValue<UserFlowType>(UserFlowType); },
            "userFlowTypeVersion": n => { this.userFlowTypeVersion = n.getNumberValue(); },
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
        writer.writeStringValue("@odata.type", this.type);
        writer.writeEnumValue<UserFlowType>("userFlowType", this.userFlowType);
        writer.writeNumberValue("userFlowTypeVersion", this.userFlowTypeVersion);
    };
    /**
     * Gets the userFlowType property value. The userFlowType property
     * @returns a userFlowType
     */
    public get userFlowType() {
        return this._userFlowType;
    };
    /**
     * Sets the userFlowType property value. The userFlowType property
     * @param value Value to set for the userFlowType property.
     */
    public set userFlowType(value: UserFlowType | undefined) {
        this._userFlowType = value;
    };
    /**
     * Gets the userFlowTypeVersion property value. The userFlowTypeVersion property
     * @returns a float
     */
    public get userFlowTypeVersion() {
        return this._userFlowTypeVersion;
    };
    /**
     * Sets the userFlowTypeVersion property value. The userFlowTypeVersion property
     * @param value Value to set for the userFlowTypeVersion property.
     */
    public set userFlowTypeVersion(value: number | undefined) {
        this._userFlowTypeVersion = value;
    };
}
