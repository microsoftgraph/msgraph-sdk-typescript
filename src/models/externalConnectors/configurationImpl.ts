import {Configuration} from './configuration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConfigurationImpl implements AdditionalDataHolder, Configuration, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A collection of application IDs for registered Azure Active Directory apps that are allowed to manage the externalConnection and to index content in the externalConnection. */
    public authorizedAppIds?: string[] | undefined;
    /**
     * Instantiates a new configuration and sets the default values.
     * @param configurationParameterValue 
     */
    public constructor(configurationParameterValue?: Configuration | undefined) {
        this.additionalData = configurationParameterValue?.additionalData ? configurationParameterValue?.additionalData! : {}
        this.authorizedAppIds = configurationParameterValue?.authorizedAppIds ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "authorizedAppIds": n => { this.authorizedAppIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.authorizedAppIds){
        writer.writeCollectionOfPrimitiveValues<string>("authorizedAppIds", this.authorizedAppIds);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
