import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudAppSecurityState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Destination IP Address of the connection to the cloud application/service. */
    private _destinationServiceIp?: string | undefined;
    /** Cloud application/service name (for example 'Salesforce', 'DropBox', etc.). */
    private _destinationServiceName?: string | undefined;
    private _odataType?: string | undefined;
    /** Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage. */
    private _riskScore?: string | undefined;
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
     * Instantiates a new cloudAppSecurityState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the destinationServiceIp property value. Destination IP Address of the connection to the cloud application/service.
     * @returns a string
     */
    public get destinationServiceIp() {
        return this._destinationServiceIp;
    };
    /**
     * Sets the destinationServiceIp property value. Destination IP Address of the connection to the cloud application/service.
     * @param value Value to set for the destinationServiceIp property.
     */
    public set destinationServiceIp(value: string | undefined) {
        this._destinationServiceIp = value;
    };
    /**
     * Gets the destinationServiceName property value. Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).
     * @returns a string
     */
    public get destinationServiceName() {
        return this._destinationServiceName;
    };
    /**
     * Sets the destinationServiceName property value. Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).
     * @param value Value to set for the destinationServiceName property.
     */
    public set destinationServiceName(value: string | undefined) {
        this._destinationServiceName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destinationServiceIp": n => { this.destinationServiceIp = n.getStringValue(); },
            "destinationServiceName": n => { this.destinationServiceName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
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
     * Gets the riskScore property value. Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Sets the riskScore property value. Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("destinationServiceIp", this.destinationServiceIp);
        writer.writeStringValue("destinationServiceName", this.destinationServiceName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("riskScore", this.riskScore);
        writer.writeAdditionalData(this.additionalData);
    };
}
