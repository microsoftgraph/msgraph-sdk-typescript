import {AccessType} from './accessType';
import {AclType} from './aclType';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Acl implements Parsable {
    private _accessType?: AccessType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _type?: AclType | undefined;
    private _value?: string | undefined;
    /**
     * Instantiates a new acl and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the accessType property value. 
     * @returns a accessType
     */
    public get accessType() {
        return this._accessType;
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the type property value. 
     * @returns a aclType
     */
    public get type() {
        return this._type;
    };
    /**
     * Gets the value property value. 
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["accessType", (o, n) => { (o as unknown as Acl).accessType = n.getEnumValue<AccessType>(AccessType); }],
            ["type", (o, n) => { (o as unknown as Acl).type = n.getEnumValue<AclType>(AclType); }],
            ["value", (o, n) => { (o as unknown as Acl).value = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<AccessType>("accessType", this.accessType);
        writer.writeEnumValue<AclType>("type", this.type);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the accessType property value. 
     * @param value Value to set for the accessType property.
     */
    public set accessType(value: AccessType | undefined) {
        this._accessType = value;
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: AclType | undefined) {
        this._type = value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
