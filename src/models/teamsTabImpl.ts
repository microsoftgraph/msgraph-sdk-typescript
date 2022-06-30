import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {createTeamsTabConfigurationFromDiscriminatorValue} from './createTeamsTabConfigurationFromDiscriminatorValue';
import {EntityImpl, TeamsAppImpl, TeamsTabConfigurationImpl} from './index';
import {TeamsApp} from './teamsApp';
import {TeamsTab} from './teamsTab';
import {TeamsTabConfiguration} from './teamsTabConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class TeamsTabImpl extends EntityImpl implements TeamsTab {
    /** Container for custom settings applied to a tab. The tab is considered configured only once this property is set. */
    private _configuration?: TeamsTabConfiguration | undefined;
    /** Name of the tab. */
    private _displayName?: string | undefined;
    /** The application that is linked to the tab. */
    private _teamsApp?: TeamsApp | undefined;
    /** Deep link URL of the tab instance. Read only. */
    private _webUrl?: string | undefined;
    /**
     * Gets the configuration property value. Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
     * @returns a TeamsTabConfigurationInterface
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: TeamsTabConfiguration | undefined) {
        if(value) {
            this._configuration = value instanceof TeamsTabConfigurationImpl? value : new TeamsTabConfigurationImpl(value);
        }
    };
    /**
     * Instantiates a new teamsTab and sets the default values.
     * @param teamsTabParameterValue 
     */
    public constructor(teamsTabParameterValue?: TeamsTab | undefined) {
        super(teamsTabParameterValue);
        this._configuration = teamsTabParameterValue?.configuration;
        this._displayName = teamsTabParameterValue?.displayName;
        this._teamsApp = teamsTabParameterValue?.teamsApp;
        this._webUrl = teamsTabParameterValue?.webUrl;
    };
    /**
     * Gets the displayName property value. Name of the tab.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the tab.
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
            "configuration": n => { this.configuration = n.getObjectValue<TeamsTabConfigurationImpl>(createTeamsTabConfigurationFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "teamsApp": n => { this.teamsApp = n.getObjectValue<TeamsAppImpl>(createTeamsAppFromDiscriminatorValue); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.configuration){
            writer.writeObjectValue<TeamsTabConfigurationImpl>("configuration", (!this.configuration || this.configuration instanceof TeamsTabConfigurationImpl? this.configuration : new TeamsTabConfigurationImpl(this.configuration)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.teamsApp){
            writer.writeObjectValue<TeamsAppImpl>("teamsApp", (!this.teamsApp || this.teamsApp instanceof TeamsAppImpl? this.teamsApp : new TeamsAppImpl(this.teamsApp)));
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
    };
    /**
     * Gets the teamsApp property value. The application that is linked to the tab.
     * @returns a TeamsAppInterface
     */
    public get teamsApp() {
        return this._teamsApp;
    };
    /**
     * Sets the teamsApp property value. The application that is linked to the tab.
     * @param value Value to set for the teamsApp property.
     */
    public set teamsApp(value: TeamsApp | undefined) {
        if(value) {
            this._teamsApp = value instanceof TeamsAppImpl? value : new TeamsAppImpl(value);
        }
    };
    /**
     * Gets the webUrl property value. Deep link URL of the tab instance. Read only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Deep link URL of the tab instance. Read only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
