import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {Entity, TeamsAppDefinition} from './index';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsApp extends Entity implements Parsable {
    /** The details for each version of the app.  */
    private _appDefinitions?: TeamsAppDefinition[] | undefined;
    /** The name of the catalog app provided by the app developer in the Microsoft Teams zip app package.  */
    private _displayName?: string | undefined;
    /** The method of distribution for the app. Read-only.  */
    private _distributionMethod?: TeamsAppDistributionMethod | undefined;
    /** The ID of the catalog provided by the app developer in the Microsoft Teams zip app package.  */
    private _externalId?: string | undefined;
    /**
     * Gets the appDefinitions property value. The details for each version of the app.
     * @returns a teamsAppDefinition
     */
    public get appDefinitions() {
        return this._appDefinitions;
    };
    /**
     * Sets the appDefinitions property value. The details for each version of the app.
     * @param value Value to set for the appDefinitions property.
     */
    public set appDefinitions(value: TeamsAppDefinition[] | undefined) {
        this._appDefinitions = value;
    };
    /**
     * Instantiates a new teamsApp and sets the default values.
     */
    public constructor() {
        super();
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
        this._displayName = value;
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
        this._distributionMethod = value;
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
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "appDefinitions": (o, n) => { (o as unknown as TeamsApp).appDefinitions = n.getCollectionOfObjectValues<TeamsAppDefinition>(createTeamsAppDefinitionFromDiscriminatorValue); },
            "displayName": (o, n) => { (o as unknown as TeamsApp).displayName = n.getStringValue(); },
            "distributionMethod": (o, n) => { (o as unknown as TeamsApp).distributionMethod = n.getEnumValue<TeamsAppDistributionMethod>(TeamsAppDistributionMethod); },
            "externalId": (o, n) => { (o as unknown as TeamsApp).externalId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TeamsAppDefinition>("appDefinitions", this.appDefinitions);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<TeamsAppDistributionMethod>("distributionMethod", this.distributionMethod);
        writer.writeStringValue("externalId", this.externalId);
    };
}
