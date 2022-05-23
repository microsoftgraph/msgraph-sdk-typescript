import {GetMemberObjectsPostRequestBody} from './getMemberObjectsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getMemberObjects method. */
export class GetMemberObjectsPostRequestBodyImpl implements AdditionalDataHolder, GetMemberObjectsPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The securityEnabledOnly property */
    public securityEnabledOnly?: boolean | undefined;
    /**
     * Instantiates a new getMemberObjectsPostRequestBody and sets the default values.
     * @param getMemberObjectsPostRequestBodyParameterValue 
     */
    public constructor(getMemberObjectsPostRequestBodyParameterValue?: GetMemberObjectsPostRequestBody | undefined) {
        this.additionalData = getMemberObjectsPostRequestBodyParameterValue?.additionalData ? getMemberObjectsPostRequestBodyParameterValue?.additionalData! : {}
        this.securityEnabledOnly = getMemberObjectsPostRequestBodyParameterValue?.securityEnabledOnly ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "securityEnabledOnly": n => { this.securityEnabledOnly = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.securityEnabledOnly){
        writer.writeBooleanValue("securityEnabledOnly", this.securityEnabledOnly);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
