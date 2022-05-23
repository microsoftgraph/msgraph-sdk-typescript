import {ValidatePermissionPostRequestBody} from './validatePermissionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the validatePermission method. */
export class ValidatePermissionPostRequestBodyImpl implements AdditionalDataHolder, Parsable, ValidatePermissionPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The challengeToken property */
    public challengeToken?: string | undefined;
    /** The password property */
    public password?: string | undefined;
    /**
     * Instantiates a new validatePermissionPostRequestBody and sets the default values.
     * @param validatePermissionPostRequestBodyParameterValue 
     */
    public constructor(validatePermissionPostRequestBodyParameterValue?: ValidatePermissionPostRequestBody | undefined) {
        this.additionalData = validatePermissionPostRequestBodyParameterValue?.additionalData ? validatePermissionPostRequestBodyParameterValue?.additionalData! : {}
        this.challengeToken = validatePermissionPostRequestBodyParameterValue?.challengeToken ;
        this.password = validatePermissionPostRequestBodyParameterValue?.password ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "challengeToken": n => { this.challengeToken = n.getStringValue(); },
            "password": n => { this.password = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.challengeToken){
        writer.writeStringValue("challengeToken", this.challengeToken);
        }
        if(this.password){
        writer.writeStringValue("password", this.password);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
