import {ConditionalAccessGrantControl} from './conditionalAccessGrantControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessGrantControls implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue. */
    private _builtInControls?: ConditionalAccessGrantControl[] | undefined;
    /** List of custom controls IDs required by the policy. For more information, see Custom controls. */
    private _customAuthenticationFactors?: string[] | undefined;
    private _odataType?: string | undefined;
    /** Defines the relationship of the grant controls. Possible values: AND, OR. */
    private _operator?: string | undefined;
    /** List of terms of use IDs required by the policy. */
    private _termsOfUse?: string[] | undefined;
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
     * Gets the builtInControls property value. List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue.
     * @returns a conditionalAccessGrantControl
     */
    public get builtInControls() {
        return this._builtInControls;
    };
    /**
     * Sets the builtInControls property value. List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue.
     * @param value Value to set for the builtInControls property.
     */
    public set builtInControls(value: ConditionalAccessGrantControl[] | undefined) {
        this._builtInControls = value;
    };
    /**
     * Instantiates a new conditionalAccessGrantControls and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the customAuthenticationFactors property value. List of custom controls IDs required by the policy. For more information, see Custom controls.
     * @returns a string
     */
    public get customAuthenticationFactors() {
        return this._customAuthenticationFactors;
    };
    /**
     * Sets the customAuthenticationFactors property value. List of custom controls IDs required by the policy. For more information, see Custom controls.
     * @param value Value to set for the customAuthenticationFactors property.
     */
    public set customAuthenticationFactors(value: string[] | undefined) {
        this._customAuthenticationFactors = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "builtInControls": n => { this.builtInControls = n.getEnumValues<ConditionalAccessGrantControl>(ConditionalAccessGrantControl); },
            "customAuthenticationFactors": n => { this.customAuthenticationFactors = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "operator": n => { this.operator = n.getStringValue(); },
            "termsOfUse": n => { this.termsOfUse = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the operator property value. Defines the relationship of the grant controls. Possible values: AND, OR.
     * @returns a string
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Sets the operator property value. Defines the relationship of the grant controls. Possible values: AND, OR.
     * @param value Value to set for the operator property.
     */
    public set operator(value: string | undefined) {
        this._operator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        this.builtInControls && writer.writeEnumValue<ConditionalAccessGrantControl>("builtInControls", ...this.builtInControls);
        writer.writeCollectionOfPrimitiveValues<string>("customAuthenticationFactors", this.customAuthenticationFactors);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("operator", this.operator);
        writer.writeCollectionOfPrimitiveValues<string>("termsOfUse", this.termsOfUse);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the termsOfUse property value. List of terms of use IDs required by the policy.
     * @returns a string
     */
    public get termsOfUse() {
        return this._termsOfUse;
    };
    /**
     * Sets the termsOfUse property value. List of terms of use IDs required by the policy.
     * @param value Value to set for the termsOfUse property.
     */
    public set termsOfUse(value: string[] | undefined) {
        this._termsOfUse = value;
    };
}
