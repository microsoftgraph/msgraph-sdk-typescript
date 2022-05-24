import {GetMemberGroupsPostRequestBody} from './getMemberGroupsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getMemberGroups method. */
export class GetMemberGroupsPostRequestBodyImpl implements AdditionalDataHolder, GetMemberGroupsPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The securityEnabledOnly property */
    public securityEnabledOnly?: boolean | undefined;
    /**
     * Instantiates a new getMemberGroupsPostRequestBody and sets the default values.
     * @param getMemberGroupsPostRequestBodyParameterValue 
     */
    public constructor(getMemberGroupsPostRequestBodyParameterValue?: GetMemberGroupsPostRequestBody | undefined) {
        this.additionalData = getMemberGroupsPostRequestBodyParameterValue?.additionalData ? getMemberGroupsPostRequestBodyParameterValue?.additionalData! : {}
        this.securityEnabledOnly = getMemberGroupsPostRequestBodyParameterValue?.securityEnabledOnly ;
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
