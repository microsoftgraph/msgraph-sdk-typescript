import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {createTeamsTabConfigurationFromDiscriminatorValue} from './createTeamsTabConfigurationFromDiscriminatorValue';
import {EntityImpl, TeamsAppImpl, TeamsTabConfigurationImpl} from './index';
import {TeamsApp} from './teamsApp';
import {TeamsTab} from './teamsTab';
import {TeamsTabConfiguration} from './teamsTabConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class TeamsTabImpl extends EntityImpl implements Parsable, TeamsTab {
    /** Container for custom settings applied to a tab. The tab is considered configured only once this property is set. */
    public configuration?: TeamsTabConfiguration | undefined;
    /** Name of the tab. */
    public displayName?: string | undefined;
    /** The application that is linked to the tab. */
    public teamsApp?: TeamsApp | undefined;
    /** Deep link URL of the tab instance. Read only. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new teamsTab and sets the default values.
     * @param teamsTabParameterValue 
     */
    public constructor(teamsTabParameterValue?: TeamsTab | undefined) {
        super();
        this.configuration = teamsTabParameterValue?.configuration ;
        this.displayName = teamsTabParameterValue?.displayName ;
        this.teamsApp = teamsTabParameterValue?.teamsApp ;
        this.webUrl = teamsTabParameterValue?.webUrl ;
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
        writer.writeObjectValue<TeamsTabConfigurationImpl>("configuration", new TeamsTabConfigurationImpl(this.configuration));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.teamsApp){
        writer.writeObjectValue<TeamsAppImpl>("teamsApp", new TeamsAppImpl(this.teamsApp));
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
    };
}
