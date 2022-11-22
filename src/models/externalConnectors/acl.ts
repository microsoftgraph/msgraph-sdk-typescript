import {AccessType} from './accessType';
import {AclType} from './aclType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Acl implements AdditionalDataHolder, Parsable {
    /** The accessType property */
    private _accessType?: AccessType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The type property */
    private _type?: AclType | undefined;
    /** The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup */
    private _value?: string | undefined;
    /**
     * Gets the accessType property value. The accessType property
     * @returns a accessType
     */
    public get accessType() {
        return this._accessType;
    };
    /**
     * Sets the accessType property value. The accessType property
     * @param value Value to set for the accessType property.
     */
    public set accessType(value: AccessType | undefined) {
        this._accessType = value;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new acl and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accessType": n => { this.accessType = n.getEnumValue<AccessType>(AccessType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<AclType>(AclType); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<AccessType>("accessType", this.accessType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<AclType>("type", this.type);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type property
     * @returns a aclType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: AclType | undefined) {
        this._type = value;
    };
    /**
     * Gets the value property value. The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
