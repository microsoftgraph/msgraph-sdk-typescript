import {CreateLinkPostRequestBody} from './createLinkPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createLink method. */
export class CreateLinkPostRequestBodyImpl implements CreateLinkPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The expirationDateTime property */
    private _expirationDateTime?: Date | undefined;
    /** The message property */
    private _message?: string | undefined;
    /** The password property */
    private _password?: string | undefined;
    /** The retainInheritedPermissions property */
    private _retainInheritedPermissions?: boolean | undefined;
    /** The scope property */
    private _scope?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new createLinkPostRequestBody and sets the default values.
     * @param createLinkPostRequestBodyParameterValue 
     */
    public constructor(createLinkPostRequestBodyParameterValue?: CreateLinkPostRequestBody | undefined) {
        this._additionalData = createLinkPostRequestBodyParameterValue?.additionalData ? createLinkPostRequestBodyParameterValue?.additionalData! : {};
        this._expirationDateTime = createLinkPostRequestBodyParameterValue?.expirationDateTime;
        this._message = createLinkPostRequestBodyParameterValue?.message;
        this._password = createLinkPostRequestBodyParameterValue?.password;
        this._retainInheritedPermissions = createLinkPostRequestBodyParameterValue?.retainInheritedPermissions;
        this._scope = createLinkPostRequestBodyParameterValue?.scope;
        this._type = createLinkPostRequestBodyParameterValue?.type;
    };
    /**
     * Gets the expirationDateTime property value. The expirationDateTime property
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expirationDateTime property
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "password": n => { this.password = n.getStringValue(); },
            "retainInheritedPermissions": n => { this.retainInheritedPermissions = n.getBooleanValue(); },
            "scope": n => { this.scope = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. The message property
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        if(value) {
            this._message = value;
        }
    };
    /**
     * Gets the password property value. The password property
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. The password property
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        if(value) {
            this._password = value;
        }
    };
    /**
     * Gets the retainInheritedPermissions property value. The retainInheritedPermissions property
     * @returns a boolean
     */
    public get retainInheritedPermissions() {
        return this._retainInheritedPermissions;
    };
    /**
     * Sets the retainInheritedPermissions property value. The retainInheritedPermissions property
     * @param value Value to set for the retainInheritedPermissions property.
     */
    public set retainInheritedPermissions(value: boolean | undefined) {
        if(value) {
            this._retainInheritedPermissions = value;
        }
    };
    /**
     * Gets the scope property value. The scope property
     * @returns a string
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. The scope property
     * @param value Value to set for the scope property.
     */
    public set scope(value: string | undefined) {
        if(value) {
            this._scope = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.message){
            writer.writeStringValue("message", this.message);
        }
        if(this.password){
            writer.writeStringValue("password", this.password);
        }
        if(this.retainInheritedPermissions){
            writer.writeBooleanValue("retainInheritedPermissions", this.retainInheritedPermissions);
        }
        if(this.scope){
            writer.writeStringValue("scope", this.scope);
        }
        if(this.type){
            writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        if(value) {
            this._type = value;
        }
    };
}
