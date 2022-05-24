import {TeamsTabConfiguration} from './teamsTabConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsTabConfigurationImpl implements AdditionalDataHolder, Parsable, TeamsTabConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Url used for rendering tab contents in Teams. Required. */
    public contentUrl?: string | undefined;
    /** Identifier for the entity hosted by the tab provider. */
    public entityId?: string | undefined;
    /** Url called by Teams client when a Tab is removed using the Teams Client. */
    public removeUrl?: string | undefined;
    /** Url for showing tab contents outside of Teams. */
    public websiteUrl?: string | undefined;
    /**
     * Instantiates a new teamsTabConfiguration and sets the default values.
     * @param teamsTabConfigurationParameterValue 
     */
    public constructor(teamsTabConfigurationParameterValue?: TeamsTabConfiguration | undefined) {
        this.additionalData = teamsTabConfigurationParameterValue?.additionalData ? teamsTabConfigurationParameterValue?.additionalData! : {}
        this.contentUrl = teamsTabConfigurationParameterValue?.contentUrl ;
        this.entityId = teamsTabConfigurationParameterValue?.entityId ;
        this.removeUrl = teamsTabConfigurationParameterValue?.removeUrl ;
        this.websiteUrl = teamsTabConfigurationParameterValue?.websiteUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
            "entityId": n => { this.entityId = n.getStringValue(); },
            "removeUrl": n => { this.removeUrl = n.getStringValue(); },
            "websiteUrl": n => { this.websiteUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contentUrl){
        writer.writeStringValue("contentUrl", this.contentUrl);
        }
        if(this.entityId){
        writer.writeStringValue("entityId", this.entityId);
        }
        if(this.removeUrl){
        writer.writeStringValue("removeUrl", this.removeUrl);
        }
        if(this.websiteUrl){
        writer.writeStringValue("websiteUrl", this.websiteUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
