import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {Entity, TeamsApp, TeamsAppDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppInstallation extends Entity implements Parsable {
    /** The app that is installed.  */
    private _teamsApp?: TeamsApp | undefined;
    /** The details of this version of the app.  */
    private _teamsAppDefinition?: TeamsAppDefinition | undefined;
    /**
     * Instantiates a new teamsAppInstallation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "teamsApp": (o, n) => { (o as unknown as TeamsAppInstallation).teamsApp = n.getObjectValue<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
            "teamsAppDefinition": (o, n) => { (o as unknown as TeamsAppInstallation).teamsAppDefinition = n.getObjectValue<TeamsAppDefinition>(createTeamsAppDefinitionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TeamsApp>("teamsApp", this.teamsApp);
        writer.writeObjectValue<TeamsAppDefinition>("teamsAppDefinition", this.teamsAppDefinition);
    };
    /**
     * Gets the teamsApp property value. The app that is installed.
     * @returns a teamsApp
     */
    public get teamsApp() {
        return this._teamsApp;
    };
    /**
     * Sets the teamsApp property value. The app that is installed.
     * @param value Value to set for the teamsApp property.
     */
    public set teamsApp(value: TeamsApp | undefined) {
        this._teamsApp = value;
    };
    /**
     * Gets the teamsAppDefinition property value. The details of this version of the app.
     * @returns a teamsAppDefinition
     */
    public get teamsAppDefinition() {
        return this._teamsAppDefinition;
    };
    /**
     * Sets the teamsAppDefinition property value. The details of this version of the app.
     * @param value Value to set for the teamsAppDefinition property.
     */
    public set teamsAppDefinition(value: TeamsAppDefinition | undefined) {
        this._teamsAppDefinition = value;
    };
}
