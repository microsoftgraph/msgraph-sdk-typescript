import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {EntityImpl, TeamsAppDefinitionImpl, TeamsAppImpl} from './index';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class TeamsAppInstallationImpl extends EntityImpl implements Parsable, TeamsAppInstallation {
    /** The app that is installed. */
    public teamsApp?: TeamsApp | undefined;
    /** The details of this version of the app. */
    public teamsAppDefinition?: TeamsAppDefinition | undefined;
    /**
     * Instantiates a new teamsAppInstallation and sets the default values.
     * @param teamsAppInstallationParameterValue 
     */
    public constructor(teamsAppInstallationParameterValue?: TeamsAppInstallation | undefined) {
        super();
        this.teamsApp = teamsAppInstallationParameterValue?.teamsApp ;
        this.teamsAppDefinition = teamsAppInstallationParameterValue?.teamsAppDefinition ;
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
        writer.writeObjectValue<TeamsAppImpl>("teamsApp", new TeamsAppImpl(this.teamsApp));
        }
        if(this.teamsAppDefinition){
        writer.writeObjectValue<TeamsAppDefinitionImpl>("teamsAppDefinition", new TeamsAppDefinitionImpl(this.teamsAppDefinition));
        }
    };
}
