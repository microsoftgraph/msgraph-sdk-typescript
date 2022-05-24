import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {EntityImpl, TeamsAppDefinitionImpl} from './index';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the appCatalogs singleton. */
export class TeamsAppImpl extends EntityImpl implements Parsable, TeamsApp {
    /** The details for each version of the app. */
    public appDefinitions?: TeamsAppDefinition[] | undefined;
    /** The name of the catalog app provided by the app developer in the Microsoft Teams zip app package. */
    public displayName?: string | undefined;
    /** The method of distribution for the app. Read-only. */
    public distributionMethod?: TeamsAppDistributionMethod | undefined;
    /** The ID of the catalog provided by the app developer in the Microsoft Teams zip app package. */
    public externalId?: string | undefined;
    /**
     * Instantiates a new teamsApp and sets the default values.
     * @param teamsAppParameterValue 
     */
    public constructor(teamsAppParameterValue?: TeamsApp | undefined) {
        super();
        this.appDefinitions = teamsAppParameterValue?.appDefinitions ;
        this.displayName = teamsAppParameterValue?.displayName ;
        this.distributionMethod = teamsAppParameterValue?.distributionMethod ;
        this.externalId = teamsAppParameterValue?.externalId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appDefinitions": n => { this.appDefinitions = n.getCollectionOfObjectValues<TeamsAppDefinitionImpl>(createTeamsAppDefinitionFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "distributionMethod": n => { this.distributionMethod = n.getEnumValue<TeamsAppDistributionMethod>(TeamsAppDistributionMethod); },
            "externalId": n => { this.externalId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appDefinitions && this.appDefinitions.length != 0){        const appDefinitionsArrValue: TeamsAppDefinitionImpl[] = []; this.appDefinitions?.forEach(element => {appDefinitionsArrValue.push(new TeamsAppDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAppDefinitionImpl>("appDefinitions", appDefinitionsArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.distributionMethod){
        writer.writeEnumValue<TeamsAppDistributionMethod>("distributionMethod", this.distributionMethod);
        }
        if(this.externalId){
        writer.writeStringValue("externalId", this.externalId);
        }
    };
}
