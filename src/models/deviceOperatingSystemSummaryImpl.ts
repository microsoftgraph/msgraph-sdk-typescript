import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device operating system summary. */
export class DeviceOperatingSystemSummaryImpl implements DeviceOperatingSystemSummary {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Number of android device count. */
    private _androidCount?: number | undefined;
    /** Number of iOS device count. */
    private _iosCount?: number | undefined;
    /** Number of Mac OS X device count. */
    private _macOSCount?: number | undefined;
    /** Number of unknown device count. */
    private _unknownCount?: number | undefined;
    /** Number of Windows device count. */
    private _windowsCount?: number | undefined;
    /** Number of Windows mobile device count. */
    private _windowsMobileCount?: number | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the androidCount property value. Number of android device count.
     * @returns a integer
     */
    public get androidCount() {
        return this._androidCount;
    };
    /**
     * Sets the androidCount property value. Number of android device count.
     * @param value Value to set for the androidCount property.
     */
    public set androidCount(value: number | undefined) {
        if(value) {
            this._androidCount = value;
        }
    };
    /**
     * Instantiates a new deviceOperatingSystemSummary and sets the default values.
     * @param deviceOperatingSystemSummaryParameterValue 
     */
    public constructor(deviceOperatingSystemSummaryParameterValue?: DeviceOperatingSystemSummary | undefined) {
        this._additionalData = deviceOperatingSystemSummaryParameterValue?.additionalData ? deviceOperatingSystemSummaryParameterValue?.additionalData! : {};
        this._androidCount = deviceOperatingSystemSummaryParameterValue?.androidCount;
        this._iosCount = deviceOperatingSystemSummaryParameterValue?.iosCount;
        this._macOSCount = deviceOperatingSystemSummaryParameterValue?.macOSCount;
        this._unknownCount = deviceOperatingSystemSummaryParameterValue?.unknownCount;
        this._windowsCount = deviceOperatingSystemSummaryParameterValue?.windowsCount;
        this._windowsMobileCount = deviceOperatingSystemSummaryParameterValue?.windowsMobileCount;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "androidCount": n => { this.androidCount = n.getNumberValue(); },
            "iosCount": n => { this.iosCount = n.getNumberValue(); },
            "macOSCount": n => { this.macOSCount = n.getNumberValue(); },
            "unknownCount": n => { this.unknownCount = n.getNumberValue(); },
            "windowsCount": n => { this.windowsCount = n.getNumberValue(); },
            "windowsMobileCount": n => { this.windowsMobileCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the iosCount property value. Number of iOS device count.
     * @returns a integer
     */
    public get iosCount() {
        return this._iosCount;
    };
    /**
     * Sets the iosCount property value. Number of iOS device count.
     * @param value Value to set for the iosCount property.
     */
    public set iosCount(value: number | undefined) {
        if(value) {
            this._iosCount = value;
        }
    };
    /**
     * Gets the macOSCount property value. Number of Mac OS X device count.
     * @returns a integer
     */
    public get macOSCount() {
        return this._macOSCount;
    };
    /**
     * Sets the macOSCount property value. Number of Mac OS X device count.
     * @param value Value to set for the macOSCount property.
     */
    public set macOSCount(value: number | undefined) {
        if(value) {
            this._macOSCount = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.androidCount){
            writer.writeNumberValue("androidCount", this.androidCount);
        }
        if(this.iosCount){
            writer.writeNumberValue("iosCount", this.iosCount);
        }
        if(this.macOSCount){
            writer.writeNumberValue("macOSCount", this.macOSCount);
        }
        if(this.unknownCount){
            writer.writeNumberValue("unknownCount", this.unknownCount);
        }
        if(this.windowsCount){
            writer.writeNumberValue("windowsCount", this.windowsCount);
        }
        if(this.windowsMobileCount){
            writer.writeNumberValue("windowsMobileCount", this.windowsMobileCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the unknownCount property value. Number of unknown device count.
     * @returns a integer
     */
    public get unknownCount() {
        return this._unknownCount;
    };
    /**
     * Sets the unknownCount property value. Number of unknown device count.
     * @param value Value to set for the unknownCount property.
     */
    public set unknownCount(value: number | undefined) {
        if(value) {
            this._unknownCount = value;
        }
    };
    /**
     * Gets the windowsCount property value. Number of Windows device count.
     * @returns a integer
     */
    public get windowsCount() {
        return this._windowsCount;
    };
    /**
     * Sets the windowsCount property value. Number of Windows device count.
     * @param value Value to set for the windowsCount property.
     */
    public set windowsCount(value: number | undefined) {
        if(value) {
            this._windowsCount = value;
        }
    };
    /**
     * Gets the windowsMobileCount property value. Number of Windows mobile device count.
     * @returns a integer
     */
    public get windowsMobileCount() {
        return this._windowsMobileCount;
    };
    /**
     * Sets the windowsMobileCount property value. Number of Windows mobile device count.
     * @param value Value to set for the windowsMobileCount property.
     */
    public set windowsMobileCount(value: number | undefined) {
        if(value) {
            this._windowsMobileCount = value;
        }
    };
}
