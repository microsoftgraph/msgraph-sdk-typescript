import {TeleconferenceDeviceMediaQuality} from './index';
import {ReferenceNumeric} from './referenceNumeric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeleconferenceDeviceVideoQuality extends TeleconferenceDeviceMediaQuality implements Parsable {
    /** The average inbound stream video bit rate per second. */
    private _averageInboundBitRate?: number | string | ReferenceNumeric | undefined;
    /** The average inbound stream video frame rate per second. */
    private _averageInboundFrameRate?: number | string | ReferenceNumeric | undefined;
    /** The average outbound stream video bit rate per second. */
    private _averageOutboundBitRate?: number | string | ReferenceNumeric | undefined;
    /** The average outbound stream video frame rate per second. */
    private _averageOutboundFrameRate?: number | string | ReferenceNumeric | undefined;
    /**
     * Gets the averageInboundBitRate property value. The average inbound stream video bit rate per second.
     * @returns a agreementAcceptances
     */
    public get averageInboundBitRate() {
        return this._averageInboundBitRate;
    };
    /**
     * Sets the averageInboundBitRate property value. The average inbound stream video bit rate per second.
     * @param value Value to set for the averageInboundBitRate property.
     */
    public set averageInboundBitRate(value: number | string | ReferenceNumeric | undefined) {
        this._averageInboundBitRate = value;
    };
    /**
     * Gets the averageInboundFrameRate property value. The average inbound stream video frame rate per second.
     * @returns a agreementAcceptances
     */
    public get averageInboundFrameRate() {
        return this._averageInboundFrameRate;
    };
    /**
     * Sets the averageInboundFrameRate property value. The average inbound stream video frame rate per second.
     * @param value Value to set for the averageInboundFrameRate property.
     */
    public set averageInboundFrameRate(value: number | string | ReferenceNumeric | undefined) {
        this._averageInboundFrameRate = value;
    };
    /**
     * Gets the averageOutboundBitRate property value. The average outbound stream video bit rate per second.
     * @returns a agreementAcceptances
     */
    public get averageOutboundBitRate() {
        return this._averageOutboundBitRate;
    };
    /**
     * Sets the averageOutboundBitRate property value. The average outbound stream video bit rate per second.
     * @param value Value to set for the averageOutboundBitRate property.
     */
    public set averageOutboundBitRate(value: number | string | ReferenceNumeric | undefined) {
        this._averageOutboundBitRate = value;
    };
    /**
     * Gets the averageOutboundFrameRate property value. The average outbound stream video frame rate per second.
     * @returns a agreementAcceptances
     */
    public get averageOutboundFrameRate() {
        return this._averageOutboundFrameRate;
    };
    /**
     * Sets the averageOutboundFrameRate property value. The average outbound stream video frame rate per second.
     * @param value Value to set for the averageOutboundFrameRate property.
     */
    public set averageOutboundFrameRate(value: number | string | ReferenceNumeric | undefined) {
        this._averageOutboundFrameRate = value;
    };
    /**
     * Instantiates a new TeleconferenceDeviceVideoQuality and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.teleconferenceDeviceVideoQuality";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "averageInboundBitRate": n => { this.averageInboundBitRate = n.getNumberValue(); },
            "averageInboundFrameRate": n => { this.averageInboundFrameRate = n.getNumberValue(); },
            "averageOutboundBitRate": n => { this.averageOutboundBitRate = n.getNumberValue(); },
            "averageOutboundFrameRate": n => { this.averageOutboundFrameRate = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("averageInboundBitRate", this.averageInboundBitRate);
        writer.writeNumberValue("averageInboundFrameRate", this.averageInboundFrameRate);
        writer.writeNumberValue("averageOutboundBitRate", this.averageOutboundBitRate);
        writer.writeNumberValue("averageOutboundFrameRate", this.averageOutboundFrameRate);
    };
}
