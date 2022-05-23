import {CreateLinkPostRequestBody} from './createLinkPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createLink method. */
export class CreateLinkPostRequestBodyImpl implements AdditionalDataHolder, CreateLinkPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The expirationDateTime property */
    public expirationDateTime?: Date | undefined;
    /** The message property */
    public message?: string | undefined;
    /** The password property */
    public password?: string | undefined;
    /** The retainInheritedPermissions property */
    public retainInheritedPermissions?: boolean | undefined;
    /** The scope property */
    public scope?: string | undefined;
    /** The type property */
    public type?: string | undefined;
    /**
     * Instantiates a new createLinkPostRequestBody and sets the default values.
     * @param createLinkPostRequestBodyParameterValue 
     */
    public constructor(createLinkPostRequestBodyParameterValue?: CreateLinkPostRequestBody | undefined) {
        this.additionalData = createLinkPostRequestBodyParameterValue?.additionalData ? createLinkPostRequestBodyParameterValue?.additionalData! : {}
        this.expirationDateTime = createLinkPostRequestBodyParameterValue?.expirationDateTime ;
        this.message = createLinkPostRequestBodyParameterValue?.message ;
        this.password = createLinkPostRequestBodyParameterValue?.password ;
        this.retainInheritedPermissions = createLinkPostRequestBodyParameterValue?.retainInheritedPermissions ;
        this.scope = createLinkPostRequestBodyParameterValue?.scope ;
        this.type = createLinkPostRequestBodyParameterValue?.type ;
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
}
