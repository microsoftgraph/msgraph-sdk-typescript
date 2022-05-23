import {PublicClientApplication} from './publicClientApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicClientApplicationImpl implements AdditionalDataHolder, Parsable, PublicClientApplication {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. */
    public redirectUris?: string[] | undefined;
    /**
     * Instantiates a new publicClientApplication and sets the default values.
     * @param publicClientApplicationParameterValue 
     */
    public constructor(publicClientApplicationParameterValue?: PublicClientApplication | undefined) {
        this.additionalData = publicClientApplicationParameterValue?.additionalData ? publicClientApplicationParameterValue?.additionalData! : {}
        this.redirectUris = publicClientApplicationParameterValue?.redirectUris ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "redirectUris": n => { this.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.redirectUris){
        writer.writeCollectionOfPrimitiveValues<string>("redirectUris", this.redirectUris);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
