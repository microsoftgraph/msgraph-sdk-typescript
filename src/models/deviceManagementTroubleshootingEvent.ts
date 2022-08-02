import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Event representing an general failure. */
export class DeviceManagementTroubleshootingEvent extends Entity implements Parsable {
    /** Id used for tracing the failure in the service. */
    private _correlationId?: string | undefined;
    /** Time when the event occurred . */
    private _eventDateTime?: Date | undefined;
    /**
     * Instantiates a new deviceManagementTroubleshootingEvent and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.deviceManagementTroubleshootingEvent";
    };
    /**
     * Gets the correlationId property value. Id used for tracing the failure in the service.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Sets the correlationId property value. Id used for tracing the failure in the service.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Gets the eventDateTime property value. Time when the event occurred .
     * @returns a Date
     */
    public get eventDateTime() {
        return this._eventDateTime;
    };
    /**
     * Sets the eventDateTime property value. Time when the event occurred .
     * @param value Value to set for the eventDateTime property.
     */
    public set eventDateTime(value: Date | undefined) {
        this._eventDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "eventDateTime": n => { this.eventDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("eventDateTime", this.eventDateTime);
    };
}
