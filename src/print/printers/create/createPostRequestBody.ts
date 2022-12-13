import {PrintCertificateSigningRequest} from '../../../models/';
import {createPrintCertificateSigningRequestFromDiscriminatorValue} from '../../../models/createPrintCertificateSigningRequestFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the create method.
 */
export class CreatePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The certificateSigningRequest property */
    private _certificateSigningRequest?: PrintCertificateSigningRequest | undefined;
    /** The connectorId property */
    private _connectorId?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The hasPhysicalDevice property */
    private _hasPhysicalDevice?: boolean | undefined;
    /** The manufacturer property */
    private _manufacturer?: string | undefined;
    /** The model property */
    private _model?: string | undefined;
    /** The physicalDeviceId property */
    private _physicalDeviceId?: string | undefined;
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
     * Gets the certificateSigningRequest property value. The certificateSigningRequest property
     * @returns a printCertificateSigningRequest
     */
    public get certificateSigningRequest() {
        return this._certificateSigningRequest;
    };
    /**
     * Sets the certificateSigningRequest property value. The certificateSigningRequest property
     * @param value Value to set for the certificateSigningRequest property.
     */
    public set certificateSigningRequest(value: PrintCertificateSigningRequest | undefined) {
        this._certificateSigningRequest = value;
    };
    /**
     * Gets the connectorId property value. The connectorId property
     * @returns a string
     */
    public get connectorId() {
        return this._connectorId;
    };
    /**
     * Sets the connectorId property value. The connectorId property
     * @param value Value to set for the connectorId property.
     */
    public set connectorId(value: string | undefined) {
        this._connectorId = value;
    };
    /**
     * Instantiates a new createPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
        return {
            "certificateSigningRequest": n => { this.certificateSigningRequest = n.getObjectValue<PrintCertificateSigningRequest>(createPrintCertificateSigningRequestFromDiscriminatorValue); },
            "connectorId": n => { this.connectorId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "hasPhysicalDevice": n => { this.hasPhysicalDevice = n.getBooleanValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "physicalDeviceId": n => { this.physicalDeviceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the hasPhysicalDevice property value. The hasPhysicalDevice property
     * @returns a boolean
     */
    public get hasPhysicalDevice() {
        return this._hasPhysicalDevice;
    };
    /**
     * Sets the hasPhysicalDevice property value. The hasPhysicalDevice property
     * @param value Value to set for the hasPhysicalDevice property.
     */
    public set hasPhysicalDevice(value: boolean | undefined) {
        this._hasPhysicalDevice = value;
    };
    /**
     * Gets the manufacturer property value. The manufacturer property
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. The manufacturer property
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the model property value. The model property
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. The model property
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Gets the physicalDeviceId property value. The physicalDeviceId property
     * @returns a string
     */
    public get physicalDeviceId() {
        return this._physicalDeviceId;
    };
    /**
     * Sets the physicalDeviceId property value. The physicalDeviceId property
     * @param value Value to set for the physicalDeviceId property.
     */
    public set physicalDeviceId(value: string | undefined) {
        this._physicalDeviceId = value;
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
}
