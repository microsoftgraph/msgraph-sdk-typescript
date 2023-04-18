import {AuthenticationMethodModes} from './authenticationMethodModes';
import {AuthenticationStrengthPolicyType} from './authenticationStrengthPolicyType';
import {AuthenticationStrengthRequirements} from './authenticationStrengthRequirements';
import {createAuthenticationCombinationConfigurationFromDiscriminatorValue} from './createAuthenticationCombinationConfigurationFromDiscriminatorValue';
import {AuthenticationCombinationConfiguration, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationStrengthPolicy extends Entity implements Parsable {
    /** The allowedCombinations property */
    private _allowedCombinations?: AuthenticationMethodModes[] | undefined;
    /** The combinationConfigurations property */
    private _combinationConfigurations?: AuthenticationCombinationConfiguration[] | undefined;
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The modifiedDateTime property */
    private _modifiedDateTime?: Date | undefined;
    /** The policyType property */
    private _policyType?: AuthenticationStrengthPolicyType | undefined;
    /** The requirementsSatisfied property */
    private _requirementsSatisfied?: AuthenticationStrengthRequirements | undefined;
    /**
     * Gets the allowedCombinations property value. The allowedCombinations property
     * @returns a authenticationMethodModes
     */
    public get allowedCombinations() {
        return this._allowedCombinations;
    };
    /**
     * Sets the allowedCombinations property value. The allowedCombinations property
     * @param value Value to set for the allowedCombinations property.
     */
    public set allowedCombinations(value: AuthenticationMethodModes[] | undefined) {
        this._allowedCombinations = value;
    };
    /**
     * Gets the combinationConfigurations property value. The combinationConfigurations property
     * @returns a authenticationCombinationConfiguration
     */
    public get combinationConfigurations() {
        return this._combinationConfigurations;
    };
    /**
     * Sets the combinationConfigurations property value. The combinationConfigurations property
     * @param value Value to set for the combinationConfigurations property.
     */
    public set combinationConfigurations(value: AuthenticationCombinationConfiguration[] | undefined) {
        this._combinationConfigurations = value;
    };
    /**
     * Instantiates a new authenticationStrengthPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The createdDateTime property
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The createdDateTime property
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedCombinations": n => { this.allowedCombinations = n.getEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
            "combinationConfigurations": n => { this.combinationConfigurations = n.getCollectionOfObjectValues<AuthenticationCombinationConfiguration>(createAuthenticationCombinationConfigurationFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "policyType": n => { this.policyType = n.getEnumValue<AuthenticationStrengthPolicyType>(AuthenticationStrengthPolicyType); },
            "requirementsSatisfied": n => { this.requirementsSatisfied = n.getEnumValue<AuthenticationStrengthRequirements>(AuthenticationStrengthRequirements); },
        };
    };
    /**
     * Gets the modifiedDateTime property value. The modifiedDateTime property
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The modifiedDateTime property
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        this._modifiedDateTime = value;
    };
    /**
     * Gets the policyType property value. The policyType property
     * @returns a authenticationStrengthPolicyType
     */
    public get policyType() {
        return this._policyType;
    };
    /**
     * Sets the policyType property value. The policyType property
     * @param value Value to set for the policyType property.
     */
    public set policyType(value: AuthenticationStrengthPolicyType | undefined) {
        this._policyType = value;
    };
    /**
     * Gets the requirementsSatisfied property value. The requirementsSatisfied property
     * @returns a authenticationStrengthRequirements
     */
    public get requirementsSatisfied() {
        return this._requirementsSatisfied;
    };
    /**
     * Sets the requirementsSatisfied property value. The requirementsSatisfied property
     * @param value Value to set for the requirementsSatisfied property.
     */
    public set requirementsSatisfied(value: AuthenticationStrengthRequirements | undefined) {
        this._requirementsSatisfied = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        this.allowedCombinations && writer.writeEnumValue<AuthenticationMethodModes>("allowedCombinations", ...this.allowedCombinations);
        writer.writeCollectionOfObjectValues<AuthenticationCombinationConfiguration>("combinationConfigurations", this.combinationConfigurations);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        writer.writeEnumValue<AuthenticationStrengthPolicyType>("policyType", this.policyType);
        writer.writeEnumValue<AuthenticationStrengthRequirements>("requirementsSatisfied", this.requirementsSatisfied);
    };
}
