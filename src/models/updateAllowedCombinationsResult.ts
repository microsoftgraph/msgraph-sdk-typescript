import {AuthenticationMethodModes} from './authenticationMethodModes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UpdateAllowedCombinationsResult implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The additionalInformation property */
    private _additionalInformation?: string | undefined;
    /** The conditionalAccessReferences property */
    private _conditionalAccessReferences?: string[] | undefined;
    /** The currentCombinations property */
    private _currentCombinations?: AuthenticationMethodModes[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The previousCombinations property */
    private _previousCombinations?: AuthenticationMethodModes[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the additionalInformation property value. The additionalInformation property
     * @returns a string
     */
    public get additionalInformation() {
        return this._additionalInformation;
    };
    /**
     * Sets the additionalInformation property value. The additionalInformation property
     * @param value Value to set for the additionalInformation property.
     */
    public set additionalInformation(value: string | undefined) {
        this._additionalInformation = value;
    };
    /**
     * Gets the conditionalAccessReferences property value. The conditionalAccessReferences property
     * @returns a string
     */
    public get conditionalAccessReferences() {
        return this._conditionalAccessReferences;
    };
    /**
     * Sets the conditionalAccessReferences property value. The conditionalAccessReferences property
     * @param value Value to set for the conditionalAccessReferences property.
     */
    public set conditionalAccessReferences(value: string[] | undefined) {
        this._conditionalAccessReferences = value;
    };
    /**
     * Instantiates a new updateAllowedCombinationsResult and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the currentCombinations property value. The currentCombinations property
     * @returns a authenticationMethodModes
     */
    public get currentCombinations() {
        return this._currentCombinations;
    };
    /**
     * Sets the currentCombinations property value. The currentCombinations property
     * @param value Value to set for the currentCombinations property.
     */
    public set currentCombinations(value: AuthenticationMethodModes[] | undefined) {
        this._currentCombinations = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additionalInformation": n => { this.additionalInformation = n.getStringValue(); },
            "conditionalAccessReferences": n => { this.conditionalAccessReferences = n.getCollectionOfPrimitiveValues<string>(); },
            "currentCombinations": n => { this.currentCombinations = n.getEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "previousCombinations": n => { this.previousCombinations = n.getEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the previousCombinations property value. The previousCombinations property
     * @returns a authenticationMethodModes
     */
    public get previousCombinations() {
        return this._previousCombinations;
    };
    /**
     * Sets the previousCombinations property value. The previousCombinations property
     * @param value Value to set for the previousCombinations property.
     */
    public set previousCombinations(value: AuthenticationMethodModes[] | undefined) {
        this._previousCombinations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("additionalInformation", this.additionalInformation);
        writer.writeCollectionOfPrimitiveValues<string>("conditionalAccessReferences", this.conditionalAccessReferences);
        this.currentCombinations && writer.writeEnumValue<AuthenticationMethodModes>("currentCombinations", ...this.currentCombinations);
        writer.writeStringValue("@odata.type", this.odataType);
        this.previousCombinations && writer.writeEnumValue<AuthenticationMethodModes>("previousCombinations", ...this.previousCombinations);
        writer.writeAdditionalData(this.additionalData);
    };
}
