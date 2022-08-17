import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection Network learning Summary entity. */
export class WindowsInformationProtectionNetworkLearningSummary extends Entity implements Parsable {
    /** Device Count */
    private _deviceCount?: number | undefined;
    /** Website url */
    private _url?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionNetworkLearningSummary and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsInformationProtectionNetworkLearningSummary";
    };
    /**
     * Gets the deviceCount property value. Device Count
     * @returns a integer
     */
    public get deviceCount() {
        return this._deviceCount;
    };
    /**
     * Sets the deviceCount property value. Device Count
     * @param value Value to set for the deviceCount property.
     */
    public set deviceCount(value: number | undefined) {
        this._deviceCount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceCount": n => { this.deviceCount = n.getNumberValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("deviceCount", this.deviceCount);
        writer.writeStringValue("url", this.url);
    };
    /**
     * Gets the url property value. Website url
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. Website url
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
