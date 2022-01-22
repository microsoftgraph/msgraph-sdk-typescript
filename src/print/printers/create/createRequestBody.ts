import {PrintCertificateSigningRequest} from '../../../models/microsoft/graph/printCertificateSigningRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CreateRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _certificateSigningRequest?: PrintCertificateSigningRequest | undefined;
    private _connectorId?: string | undefined;
    private _displayName?: string | undefined;
    private _hasPhysicalDevice?: boolean | undefined;
    private _manufacturer?: string | undefined;
    private _model?: string | undefined;
    private _physicalDeviceId?: string | undefined;
    /**
     * Instantiates a new createRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the certificateSigningRequest property value. 
     * @returns a printCertificateSigningRequest
     */
    public get certificateSigningRequest() {
        return this._certificateSigningRequest;
    };
    /**
     * Gets the connectorId property value. 
     * @returns a string
     */
    public get connectorId() {
        return this._connectorId;
    };
    /**
     * Gets the displayName property value. 
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the hasPhysicalDevice property value. 
     * @returns a boolean
     */
    public get hasPhysicalDevice() {
        return this._hasPhysicalDevice;
    };
    /**
     * Gets the manufacturer property value. 
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Gets the model property value. 
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Gets the physicalDeviceId property value. 
     * @returns a string
     */
    public get physicalDeviceId() {
        return this._physicalDeviceId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["certificateSigningRequest", (o, n) => { (o as unknown as CreateRequestBody).certificateSigningRequest = n.getObjectValue<PrintCertificateSigningRequest>(PrintCertificateSigningRequest); }],
            ["connectorId", (o, n) => { (o as unknown as CreateRequestBody).connectorId = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as CreateRequestBody).displayName = n.getStringValue(); }],
            ["hasPhysicalDevice", (o, n) => { (o as unknown as CreateRequestBody).hasPhysicalDevice = n.getBooleanValue(); }],
            ["manufacturer", (o, n) => { (o as unknown as CreateRequestBody).manufacturer = n.getStringValue(); }],
            ["model", (o, n) => { (o as unknown as CreateRequestBody).model = n.getStringValue(); }],
            ["physicalDeviceId", (o, n) => { (o as unknown as CreateRequestBody).physicalDeviceId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PrintCertificateSigningRequest>("certificateSigningRequest", this.certificateSigningRequest);
        writer.writeStringValue("connectorId", this.connectorId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("hasPhysicalDevice", this.hasPhysicalDevice);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeStringValue("physicalDeviceId", this.physicalDeviceId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the certificateSigningRequest property value. 
     * @param value Value to set for the certificateSigningRequest property.
     */
    public set certificateSigningRequest(value: PrintCertificateSigningRequest | undefined) {
        this._certificateSigningRequest = value;
    };
    /**
     * Sets the connectorId property value. 
     * @param value Value to set for the connectorId property.
     */
    public set connectorId(value: string | undefined) {
        this._connectorId = value;
    };
    /**
     * Sets the displayName property value. 
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the hasPhysicalDevice property value. 
     * @param value Value to set for the hasPhysicalDevice property.
     */
    public set hasPhysicalDevice(value: boolean | undefined) {
        this._hasPhysicalDevice = value;
    };
    /**
     * Sets the manufacturer property value. 
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Sets the model property value. 
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Sets the physicalDeviceId property value. 
     * @param value Value to set for the physicalDeviceId property.
     */
    public set physicalDeviceId(value: string | undefined) {
        this._physicalDeviceId = value;
    };
}
