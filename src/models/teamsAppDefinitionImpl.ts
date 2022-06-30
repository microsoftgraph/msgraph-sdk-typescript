import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkBotFromDiscriminatorValue} from './createTeamworkBotFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, TeamworkBotImpl} from './index';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {TeamworkBot} from './teamworkBot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the appCatalogs singleton. */
export class TeamsAppDefinitionImpl extends EntityImpl implements TeamsAppDefinition {
    /** The details of the bot specified in the Teams app manifest. */
    private _bot?: TeamworkBot | undefined;
    /** The createdBy property */
    private _createdBy?: IdentitySet | undefined;
    /** Verbose description of the application. */
    private _description?: string | undefined;
    /** The name of the app provided by the app developer. */
    private _displayName?: string | undefined;
    /** The lastModifiedDateTime property */
    private _lastModifiedDateTime?: Date | undefined;
    /** The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin. */
    private _publishingState?: TeamsAppPublishingState | undefined;
    /** Short description of the application. */
    private _shortDescription?: string | undefined;
    /** The ID from the Teams app manifest. */
    private _teamsAppId?: string | undefined;
    /** The version number of the application. */
    private _version?: string | undefined;
    /**
     * Gets the bot property value. The details of the bot specified in the Teams app manifest.
     * @returns a TeamworkBotInterface
     */
    public get bot() {
        return this._bot;
    };
    /**
     * Sets the bot property value. The details of the bot specified in the Teams app manifest.
     * @param value Value to set for the bot property.
     */
    public set bot(value: TeamworkBot | undefined) {
        if(value) {
            this._bot = value instanceof TeamworkBotImpl? value : new TeamworkBotImpl(value);
        }
    };
    /**
     * Instantiates a new teamsAppDefinition and sets the default values.
     * @param teamsAppDefinitionParameterValue 
     */
    public constructor(teamsAppDefinitionParameterValue?: TeamsAppDefinition | undefined) {
        super(teamsAppDefinitionParameterValue);
        this._bot = teamsAppDefinitionParameterValue?.bot;
        this._createdBy = teamsAppDefinitionParameterValue?.createdBy;
        this._description = teamsAppDefinitionParameterValue?.description;
        this._displayName = teamsAppDefinitionParameterValue?.displayName;
        this._lastModifiedDateTime = teamsAppDefinitionParameterValue?.lastModifiedDateTime;
        this._publishingState = teamsAppDefinitionParameterValue?.publishingState;
        this._shortDescription = teamsAppDefinitionParameterValue?.shortDescription;
        this._teamsAppId = teamsAppDefinitionParameterValue?.teamsAppId;
        this._version = teamsAppDefinitionParameterValue?.version;
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the description property value. Verbose description of the application.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Verbose description of the application.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The name of the app provided by the app developer.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the app provided by the app developer.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the publishingState property value. The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin.
     * @returns a teamsAppPublishingState
     */
    public get publishingState() {
        return this._publishingState;
    };
    /**
     * Sets the publishingState property value. The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the Teams app has been submitted and is under review. published  — The request to publish the specific version of the Teams app has been approved by the admin and the app is published.  rejected — The request to publish the specific version of the Teams app was rejected by the admin.
     * @param value Value to set for the publishingState property.
     */
    public set publishingState(value: TeamsAppPublishingState | undefined) {
        if(value) {
            this._publishingState = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bot){
            writer.writeObjectValue<TeamworkBotImpl>("bot", (!this.bot || this.bot instanceof TeamworkBotImpl? this.bot : new TeamworkBotImpl(this.bot)));
        }
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (!this.createdBy || this.createdBy instanceof IdentitySetImpl? this.createdBy : new IdentitySetImpl(this.createdBy)));
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
    /**
     * Gets the shortDescription property value. Short description of the application.
     * @returns a string
     */
    public get shortDescription() {
        return this._shortDescription;
    };
    /**
     * Sets the shortDescription property value. Short description of the application.
     * @param value Value to set for the shortDescription property.
     */
    public set shortDescription(value: string | undefined) {
        if(value) {
            this._shortDescription = value;
        }
    };
    /**
     * Gets the teamsAppId property value. The ID from the Teams app manifest.
     * @returns a string
     */
    public get teamsAppId() {
        return this._teamsAppId;
    };
    /**
     * Sets the teamsAppId property value. The ID from the Teams app manifest.
     * @param value Value to set for the teamsAppId property.
     */
    public set teamsAppId(value: string | undefined) {
        if(value) {
            this._teamsAppId = value;
        }
    };
    /**
     * Gets the version property value. The version number of the application.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version number of the application.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
