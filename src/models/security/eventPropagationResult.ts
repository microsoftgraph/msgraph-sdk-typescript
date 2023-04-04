import {EventPropagationStatus} from './eventPropagationStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventPropagationResult implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The name of the specific location in the workload associated with the event. */
    private _location?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The name of the workload associated with the event. */
    private _serviceName?: string | undefined;
    /** Indicates the status of the event creation request. The possible values are: none, inProcessing, failed, success, unknownFutureValue. */
    private _status?: EventPropagationStatus | undefined;
    /** Additional information about the status of the event creation request. */
    private _statusInformation?: string | undefined;
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
     * Instantiates a new eventPropagationResult and sets the default values.
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
            "location": n => { this.location = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "serviceName": n => { this.serviceName = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<EventPropagationStatus>(EventPropagationStatus); },
            "statusInformation": n => { this.statusInformation = n.getStringValue(); },
        };
    };
    /**
     * Gets the location property value. The name of the specific location in the workload associated with the event.
     * @returns a string
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The name of the specific location in the workload associated with the event.
     * @param value Value to set for the location property.
     */
    public set location(value: string | undefined) {
        this._location = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("location", this.location);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("serviceName", this.serviceName);
        writer.writeEnumValue<EventPropagationStatus>("status", this.status);
        writer.writeStringValue("statusInformation", this.statusInformation);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serviceName property value. The name of the workload associated with the event.
     * @returns a string
     */
    public get serviceName() {
        return this._serviceName;
    };
    /**
     * Sets the serviceName property value. The name of the workload associated with the event.
     * @param value Value to set for the serviceName property.
     */
    public set serviceName(value: string | undefined) {
        this._serviceName = value;
    };
    /**
     * Gets the status property value. Indicates the status of the event creation request. The possible values are: none, inProcessing, failed, success, unknownFutureValue.
     * @returns a eventPropagationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Indicates the status of the event creation request. The possible values are: none, inProcessing, failed, success, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: EventPropagationStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the statusInformation property value. Additional information about the status of the event creation request.
     * @returns a string
     */
    public get statusInformation() {
        return this._statusInformation;
    };
    /**
     * Sets the statusInformation property value. Additional information about the status of the event creation request.
     * @param value Value to set for the statusInformation property.
     */
    public set statusInformation(value: string | undefined) {
        this._statusInformation = value;
    };
}
