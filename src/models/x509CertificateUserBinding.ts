import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class X509CertificateUserBinding implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The priority property */
    private _priority?: number | undefined;
    /** The userProperty property */
    private _userProperty?: string | undefined;
    /** The x509CertificateField property */
    private _x509CertificateField?: string | undefined;
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
     * Instantiates a new x509CertificateUserBinding and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.x509CertificateUserBinding";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "priority": n => { this.priority = n.getNumberValue(); },
            "userProperty": n => { this.userProperty = n.getStringValue(); },
            "x509CertificateField": n => { this.x509CertificateField = n.getStringValue(); },
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
     * Gets the priority property value. The priority property
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. The priority property
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        this._priority = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("priority", this.priority);
        writer.writeStringValue("userProperty", this.userProperty);
        writer.writeStringValue("x509CertificateField", this.x509CertificateField);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userProperty property value. The userProperty property
     * @returns a string
     */
    public get userProperty() {
        return this._userProperty;
    };
    /**
     * Sets the userProperty property value. The userProperty property
     * @param value Value to set for the userProperty property.
     */
    public set userProperty(value: string | undefined) {
        this._userProperty = value;
    };
    /**
     * Gets the x509CertificateField property value. The x509CertificateField property
     * @returns a string
     */
    public get x509CertificateField() {
        return this._x509CertificateField;
    };
    /**
     * Sets the x509CertificateField property value. The x509CertificateField property
     * @param value Value to set for the x509CertificateField property.
     */
    public set x509CertificateField(value: string | undefined) {
        this._x509CertificateField = value;
    };
}
