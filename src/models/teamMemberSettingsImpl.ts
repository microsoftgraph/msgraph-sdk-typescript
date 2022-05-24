import {TeamMemberSettings} from './teamMemberSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamMemberSettingsImpl implements AdditionalDataHolder, Parsable, TeamMemberSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If set to true, members can add and remove apps. */
    public allowAddRemoveApps?: boolean | undefined;
    /** If set to true, members can add and update private channels. */
    public allowCreatePrivateChannels?: boolean | undefined;
    /** If set to true, members can add and update any channels. */
    public allowCreateUpdateChannels?: boolean | undefined;
    /** If set to true, members can add, update, and remove connectors. */
    public allowCreateUpdateRemoveConnectors?: boolean | undefined;
    /** If set to true, members can add, update, and remove tabs. */
    public allowCreateUpdateRemoveTabs?: boolean | undefined;
    /** If set to true, members can delete channels. */
    public allowDeleteChannels?: boolean | undefined;
    /**
     * Instantiates a new teamMemberSettings and sets the default values.
     * @param teamMemberSettingsParameterValue 
     */
    public constructor(teamMemberSettingsParameterValue?: TeamMemberSettings | undefined) {
        this.additionalData = teamMemberSettingsParameterValue?.additionalData ? teamMemberSettingsParameterValue?.additionalData! : {}
        this.allowAddRemoveApps = teamMemberSettingsParameterValue?.allowAddRemoveApps ;
        this.allowCreatePrivateChannels = teamMemberSettingsParameterValue?.allowCreatePrivateChannels ;
        this.allowCreateUpdateChannels = teamMemberSettingsParameterValue?.allowCreateUpdateChannels ;
        this.allowCreateUpdateRemoveConnectors = teamMemberSettingsParameterValue?.allowCreateUpdateRemoveConnectors ;
        this.allowCreateUpdateRemoveTabs = teamMemberSettingsParameterValue?.allowCreateUpdateRemoveTabs ;
        this.allowDeleteChannels = teamMemberSettingsParameterValue?.allowDeleteChannels ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowAddRemoveApps": n => { this.allowAddRemoveApps = n.getBooleanValue(); },
            "allowCreatePrivateChannels": n => { this.allowCreatePrivateChannels = n.getBooleanValue(); },
            "allowCreateUpdateChannels": n => { this.allowCreateUpdateChannels = n.getBooleanValue(); },
            "allowCreateUpdateRemoveConnectors": n => { this.allowCreateUpdateRemoveConnectors = n.getBooleanValue(); },
            "allowCreateUpdateRemoveTabs": n => { this.allowCreateUpdateRemoveTabs = n.getBooleanValue(); },
            "allowDeleteChannels": n => { this.allowDeleteChannels = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowAddRemoveApps){
        writer.writeBooleanValue("allowAddRemoveApps", this.allowAddRemoveApps);
        }
        if(this.allowCreatePrivateChannels){
        writer.writeBooleanValue("allowCreatePrivateChannels", this.allowCreatePrivateChannels);
        }
        if(this.allowCreateUpdateChannels){
        writer.writeBooleanValue("allowCreateUpdateChannels", this.allowCreateUpdateChannels);
        }
        if(this.allowCreateUpdateRemoveConnectors){
        writer.writeBooleanValue("allowCreateUpdateRemoveConnectors", this.allowCreateUpdateRemoveConnectors);
        }
        if(this.allowCreateUpdateRemoveTabs){
        writer.writeBooleanValue("allowCreateUpdateRemoveTabs", this.allowCreateUpdateRemoveTabs);
        }
        if(this.allowDeleteChannels){
        writer.writeBooleanValue("allowDeleteChannels", this.allowDeleteChannels);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
