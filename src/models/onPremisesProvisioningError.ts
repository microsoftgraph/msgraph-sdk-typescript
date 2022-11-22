import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesProvisioningError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property. */
    private _category?: string | undefined;
    /** The date and time at which the error occurred. */
    private _occurredDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress */
    private _propertyCausingError?: string | undefined;
    /** Value of the property causing the error. */
    private _value?: string | undefined;
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
     * Gets the category property value. Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property.
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property.
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Instantiates a new onPremisesProvisioningError and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "category": n => { this.category = n.getStringValue(); },
            "occurredDateTime": n => { this.occurredDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "propertyCausingError": n => { this.propertyCausingError = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the occurredDateTime property value. The date and time at which the error occurred.
     * @returns a Date
     */
    public get occurredDateTime() {
        return this._occurredDateTime;
    };
    /**
     * Sets the occurredDateTime property value. The date and time at which the error occurred.
     * @param value Value to set for the occurredDateTime property.
     */
    public set occurredDateTime(value: Date | undefined) {
        this._occurredDateTime = value;
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
     * Gets the propertyCausingError property value. Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress
     * @returns a string
     */
    public get propertyCausingError() {
        return this._propertyCausingError;
    };
    /**
     * Sets the propertyCausingError property value. Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress
     * @param value Value to set for the propertyCausingError property.
     */
    public set propertyCausingError(value: string | undefined) {
        this._propertyCausingError = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("category", this.category);
        writer.writeDateValue("occurredDateTime", this.occurredDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("propertyCausingError", this.propertyCausingError);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. Value of the property causing the error.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value of the property causing the error.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
