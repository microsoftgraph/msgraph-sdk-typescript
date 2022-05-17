import {CreateLinkRequestBody} from './createLinkRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createLink method. */
export class CreateLinkRequestBodyImpl implements AdditionalDataHolder, CreateLinkRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The expirationDateTime property */
    expirationDateTime?: Date | undefined;
    /** The message property */
    message?: string | undefined;
    /** The password property */
    password?: string | undefined;
    /** The retainInheritedPermissions property */
    retainInheritedPermissions?: boolean | undefined;
    /** The scope property */
    scope?: string | undefined;
    /** The type property */
    type?: string | undefined;
    /**
     * Instantiates a new createLinkRequestBody and sets the default values.
     * @param createLinkRequestBodyParameterValue 
     */
    public constructor(createLinkRequestBodyParameterValue?: CreateLinkRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = createLinkRequestBodyParameterValue?.additionalData ? {} : createLinkRequestBodyParameterValue?.additionalData!
        this.expirationDateTime = createLinkRequestBodyParameterValue?.expirationDateTime ;
        this.message = createLinkRequestBodyParameterValue?.message ;
        this.password = createLinkRequestBodyParameterValue?.password ;
        this.retainInheritedPermissions = createLinkRequestBodyParameterValue?.retainInheritedPermissions ;
        this.scope = createLinkRequestBodyParameterValue?.scope ;
        this.type = createLinkRequestBodyParameterValue?.type ;
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
        if(this.expirationDateTime)
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.message){
        if(this.message)
        writer.writeStringValue("message", this.message);
        }
        if(this.password){
        if(this.password)
        writer.writeStringValue("password", this.password);
        }
        if(this.retainInheritedPermissions){
        if(this.retainInheritedPermissions)
        writer.writeBooleanValue("retainInheritedPermissions", this.retainInheritedPermissions);
        }
        if(this.scope){
        if(this.scope)
        writer.writeStringValue("scope", this.scope);
        }
        if(this.type){
        if(this.type)
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
