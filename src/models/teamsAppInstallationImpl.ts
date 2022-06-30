import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {EntityImpl, TeamsAppDefinitionImpl, TeamsAppImpl} from './index';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class TeamsAppInstallationImpl extends EntityImpl implements TeamsAppInstallation {
    /** The app that is installed. */
    private _teamsApp?: TeamsApp | undefined;
    /** The details of this version of the app. */
    private _teamsAppDefinition?: TeamsAppDefinition | undefined;
    /**
     * Instantiates a new teamsAppInstallation and sets the default values.
     * @param teamsAppInstallationParameterValue 
     */
    public constructor(teamsAppInstallationParameterValue?: TeamsAppInstallation | undefined) {
        super(teamsAppInstallationParameterValue);
        this._teamsApp = teamsAppInstallationParameterValue?.teamsApp;
        this._teamsAppDefinition = teamsAppInstallationParameterValue?.teamsAppDefinition;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "teamsApp": n => { this.teamsApp = n.getObjectValue<TeamsAppImpl>(createTeamsAppFromDiscriminatorValue); },
            "teamsAppDefinition": n => { this.teamsAppDefinition = n.getObjectValue<TeamsAppDefinitionImpl>(createTeamsAppDefinitionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.teamsApp){
            writer.writeObjectValue<TeamsAppImpl>("teamsApp", (!this.teamsApp || this.teamsApp instanceof TeamsAppImpl? this.teamsApp : new TeamsAppImpl(this.teamsApp)));
        }
        if(this.teamsAppDefinition){
            writer.writeObjectValue<TeamsAppDefinitionImpl>("teamsAppDefinition", (!this.teamsAppDefinition || this.teamsAppDefinition instanceof TeamsAppDefinitionImpl? this.teamsAppDefinition : new TeamsAppDefinitionImpl(this.teamsAppDefinition)));
        }
    };
    /**
     * Gets the teamsApp property value. The app that is installed.
     * @returns a TeamsAppInterface
     */
    public get teamsApp() {
        return this._teamsApp;
    };
    /**
     * Sets the teamsApp property value. The app that is installed.
     * @param value Value to set for the teamsApp property.
     */
    public set teamsApp(value: TeamsApp | undefined) {
        if(value) {
            this._teamsApp = value instanceof TeamsAppImpl? value : new TeamsAppImpl(value);
        }
    };
    /**
     * Gets the teamsAppDefinition property value. The details of this version of the app.
     * @returns a TeamsAppDefinitionInterface
     */
    public get teamsAppDefinition() {
        return this._teamsAppDefinition;
    };
    /**
     * Sets the teamsAppDefinition property value. The details of this version of the app.
     * @param value Value to set for the teamsAppDefinition property.
     */
    public set teamsAppDefinition(value: TeamsAppDefinition | undefined) {
        if(value) {
            this._teamsAppDefinition = value instanceof TeamsAppDefinitionImpl? value : new TeamsAppDefinitionImpl(value);
        }
    };
}
