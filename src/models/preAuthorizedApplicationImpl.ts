import {PreAuthorizedApplication} from './preAuthorizedApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PreAuthorizedApplicationImpl implements AdditionalDataHolder, Parsable, PreAuthorizedApplication {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The unique identifier for the application. */
    public appId?: string | undefined;
    /** The unique identifier for the oauth2PermissionScopes the application requires. */
    public delegatedPermissionIds?: string[] | undefined;
    /**
     * Instantiates a new preAuthorizedApplication and sets the default values.
     * @param preAuthorizedApplicationParameterValue 
     */
    public constructor(preAuthorizedApplicationParameterValue?: PreAuthorizedApplication | undefined) {
        this.additionalData = preAuthorizedApplicationParameterValue?.additionalData ? preAuthorizedApplicationParameterValue?.additionalData! : {}
        this.appId = preAuthorizedApplicationParameterValue?.appId ;
        this.delegatedPermissionIds = preAuthorizedApplicationParameterValue?.delegatedPermissionIds ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appId": n => { this.appId = n.getStringValue(); },
            "delegatedPermissionIds": n => { this.delegatedPermissionIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.appId){
        writer.writeStringValue("appId", this.appId);
        }
        if(this.delegatedPermissionIds){
        writer.writeCollectionOfPrimitiveValues<string>("delegatedPermissionIds", this.delegatedPermissionIds);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
