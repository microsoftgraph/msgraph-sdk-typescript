import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkBotFromDiscriminatorValue} from './createTeamworkBotFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, TeamworkBotImpl} from './index';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {TeamworkBot} from './teamworkBot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the appCatalogs singleton. */
export class TeamsAppDefinitionImpl extends EntityImpl implements Parsable, TeamsAppDefinition {
    /** The details of the bot specified in the Teams app manifest. */
    public bot?: TeamworkBot | undefined;
    /** The createdBy property */
    public createdBy?: IdentitySet | undefined;
    /** Verbose description of the application. */
    public description?: string | undefined;
    /** The name of the app provided by the app developer. */
    public displayName?: string | undefined;
    /** The lastModifiedDateTime property */
    public lastModifiedDateTime?: Date | undefined;
    /** The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin. */
    public publishingState?: TeamsAppPublishingState | undefined;
    /** Short description of the application. */
    public shortDescription?: string | undefined;
    /** The ID from the Teams app manifest. */
    public teamsAppId?: string | undefined;
    /** The version number of the application. */
    public version?: string | undefined;
    /**
     * Instantiates a new teamsAppDefinition and sets the default values.
     * @param teamsAppDefinitionParameterValue 
     */
    public constructor(teamsAppDefinitionParameterValue?: TeamsAppDefinition | undefined) {
        super();
        this.bot = teamsAppDefinitionParameterValue?.bot ;
        this.createdBy = teamsAppDefinitionParameterValue?.createdBy ;
        this.description = teamsAppDefinitionParameterValue?.description ;
        this.displayName = teamsAppDefinitionParameterValue?.displayName ;
        this.lastModifiedDateTime = teamsAppDefinitionParameterValue?.lastModifiedDateTime ;
        this.publishingState = teamsAppDefinitionParameterValue?.publishingState ;
        this.shortDescription = teamsAppDefinitionParameterValue?.shortDescription ;
        this.teamsAppId = teamsAppDefinitionParameterValue?.teamsAppId ;
        this.version = teamsAppDefinitionParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bot": n => { this.bot = n.getObjectValue<TeamworkBotImpl>(createTeamworkBotFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "publishingState": n => { this.publishingState = n.getEnumValue<TeamsAppPublishingState>(TeamsAppPublishingState); },
            "shortDescription": n => { this.shortDescription = n.getStringValue(); },
            "teamsAppId": n => { this.teamsAppId = n.getStringValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bot){
        writer.writeObjectValue<TeamworkBotImpl>("bot", new TeamworkBotImpl(this.bot));
        }
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.publishingState){
        writer.writeEnumValue<TeamsAppPublishingState>("publishingState", this.publishingState);
        }
        if(this.shortDescription){
        writer.writeStringValue("shortDescription", this.shortDescription);
        }
        if(this.teamsAppId){
        writer.writeStringValue("teamsAppId", this.teamsAppId);
        }
        if(this.version){
        writer.writeStringValue("version", this.version);
        }
    };
}
