import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {EntityImpl, TeamsAppDefinitionImpl} from './index';
import {TeamsApp} from './teamsApp';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the appCatalogs singleton. */
export class TeamsAppImpl extends EntityImpl implements TeamsApp {
    /** The details for each version of the app. */
    private _appDefinitions?: TeamsAppDefinition[] | undefined;
    /** The name of the catalog app provided by the app developer in the Microsoft Teams zip app package. */
    private _displayName?: string | undefined;
    /** The method of distribution for the app. Read-only. */
    private _distributionMethod?: TeamsAppDistributionMethod | undefined;
    /** The ID of the catalog provided by the app developer in the Microsoft Teams zip app package. */
    private _externalId?: string | undefined;
    /**
     * Gets the appDefinitions property value. The details for each version of the app.
     * @returns a TeamsAppDefinitionInterface
     */
    public get appDefinitions() {
        return this._appDefinitions;
    };
    /**
     * Sets the appDefinitions property value. The details for each version of the app.
     * @param value Value to set for the appDefinitions property.
     */
    public set appDefinitions(value: TeamsAppDefinition[] | undefined) {
        if(value) {
            const appDefinitionsArrValue: TeamsAppDefinitionImpl[] = [];
            this.appDefinitions?.forEach(element => {
                appDefinitionsArrValue.push((element instanceof TeamsAppDefinitionImpl? element:new TeamsAppDefinitionImpl(element)));
            });
            this._appDefinitions = appDefinitionsArrValue;
        }
    };
    /**
     * Instantiates a new teamsApp and sets the default values.
     * @param teamsAppParameterValue 
     */
    public constructor(teamsAppParameterValue?: TeamsApp | undefined) {
        super(teamsAppParameterValue);
        this._appDefinitions = teamsAppParameterValue?.appDefinitions;
        this._displayName = teamsAppParameterValue?.displayName;
        this._distributionMethod = teamsAppParameterValue?.distributionMethod;
        this._externalId = teamsAppParameterValue?.externalId;
    };
    /**
     * Gets the displayName property value. The name of the catalog app provided by the app developer in the Microsoft Teams zip app package.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the catalog app provided by the app developer in the Microsoft Teams zip app package.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the distributionMethod property value. The method of distribution for the app. Read-only.
     * @returns a teamsAppDistributionMethod
     */
    public get distributionMethod() {
        return this._distributionMethod;
    };
    /**
     * Sets the distributionMethod property value. The method of distribution for the app. Read-only.
     * @param value Value to set for the distributionMethod property.
     */
    public set distributionMethod(value: TeamsAppDistributionMethod | undefined) {
        if(value) {
            this._distributionMethod = value;
        }
    };
    /**
     * Gets the externalId property value. The ID of the catalog provided by the app developer in the Microsoft Teams zip app package.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. The ID of the catalog provided by the app developer in the Microsoft Teams zip app package.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        if(value) {
            this._externalId = value;
        }
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
        if(this.appDefinitions && this.appDefinitions.length != 0){        const appDefinitionsArrValue: TeamsAppDefinitionImpl[] = [];
        this.appDefinitions?.forEach(element => {
            appDefinitionsArrValue.push((element instanceof TeamsAppDefinitionImpl? element:new TeamsAppDefinitionImpl(element)));
        });
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
