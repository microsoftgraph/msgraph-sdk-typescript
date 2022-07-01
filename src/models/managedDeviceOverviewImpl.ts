import {createDeviceExchangeAccessStateSummaryFromDiscriminatorValue} from './createDeviceExchangeAccessStateSummaryFromDiscriminatorValue';
import {createDeviceOperatingSystemSummaryFromDiscriminatorValue} from './createDeviceOperatingSystemSummaryFromDiscriminatorValue';
import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {DeviceExchangeAccessStateSummaryImpl, DeviceOperatingSystemSummaryImpl, EntityImpl} from './index';
import {ManagedDeviceOverview} from './managedDeviceOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Summary data for managed devices */
export class ManagedDeviceOverviewImpl extends EntityImpl implements ManagedDeviceOverview {
    /** Distribution of Exchange Access State in Intune */
    private _deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary | undefined;
    /** Device operating system summary. */
    private _deviceOperatingSystemSummary?: DeviceOperatingSystemSummary | undefined;
    /** The number of devices enrolled in both MDM and EAS */
    private _dualEnrolledDeviceCount?: number | undefined;
    /** Total enrolled device count. Does not include PC devices managed via Intune PC Agent */
    private _enrolledDeviceCount?: number | undefined;
    /** The number of devices enrolled in MDM */
    private _mdmEnrolledCount?: number | undefined;
    /**
     * Instantiates a new managedDeviceOverview and sets the default values.
     * @param managedDeviceOverviewParameterValue 
     */
    public constructor(managedDeviceOverviewParameterValue?: ManagedDeviceOverview | undefined) {
        super(managedDeviceOverviewParameterValue);
        this._deviceExchangeAccessStateSummary = managedDeviceOverviewParameterValue?.deviceExchangeAccessStateSummary;
        this._deviceOperatingSystemSummary = managedDeviceOverviewParameterValue?.deviceOperatingSystemSummary;
        this._dualEnrolledDeviceCount = managedDeviceOverviewParameterValue?.dualEnrolledDeviceCount;
        this._enrolledDeviceCount = managedDeviceOverviewParameterValue?.enrolledDeviceCount;
        this._mdmEnrolledCount = managedDeviceOverviewParameterValue?.mdmEnrolledCount;
    };
    /**
     * Gets the deviceExchangeAccessStateSummary property value. Distribution of Exchange Access State in Intune
     * @returns a DeviceExchangeAccessStateSummaryInterface
     */
    public get deviceExchangeAccessStateSummary() {
        return this._deviceExchangeAccessStateSummary;
    };
    /**
     * Sets the deviceExchangeAccessStateSummary property value. Distribution of Exchange Access State in Intune
     * @param value Value to set for the deviceExchangeAccessStateSummary property.
     */
    public set deviceExchangeAccessStateSummary(value: DeviceExchangeAccessStateSummary | undefined) {
        if(value) {
            this._deviceExchangeAccessStateSummary = value instanceof DeviceExchangeAccessStateSummaryImpl? value as DeviceExchangeAccessStateSummaryImpl: new DeviceExchangeAccessStateSummaryImpl(value);
        }
    };
    /**
     * Gets the deviceOperatingSystemSummary property value. Device operating system summary.
     * @returns a DeviceOperatingSystemSummaryInterface
     */
    public get deviceOperatingSystemSummary() {
        return this._deviceOperatingSystemSummary;
    };
    /**
     * Sets the deviceOperatingSystemSummary property value. Device operating system summary.
     * @param value Value to set for the deviceOperatingSystemSummary property.
     */
    public set deviceOperatingSystemSummary(value: DeviceOperatingSystemSummary | undefined) {
        if(value) {
            this._deviceOperatingSystemSummary = value instanceof DeviceOperatingSystemSummaryImpl? value as DeviceOperatingSystemSummaryImpl: new DeviceOperatingSystemSummaryImpl(value);
        }
    };
    /**
     * Gets the dualEnrolledDeviceCount property value. The number of devices enrolled in both MDM and EAS
     * @returns a integer
     */
    public get dualEnrolledDeviceCount() {
        return this._dualEnrolledDeviceCount;
    };
    /**
     * Sets the dualEnrolledDeviceCount property value. The number of devices enrolled in both MDM and EAS
     * @param value Value to set for the dualEnrolledDeviceCount property.
     */
    public set dualEnrolledDeviceCount(value: number | undefined) {
        if(value) {
            this._dualEnrolledDeviceCount = value;
        }
    };
    /**
     * Gets the enrolledDeviceCount property value. Total enrolled device count. Does not include PC devices managed via Intune PC Agent
     * @returns a integer
     */
    public get enrolledDeviceCount() {
        return this._enrolledDeviceCount;
    };
    /**
     * Sets the enrolledDeviceCount property value. Total enrolled device count. Does not include PC devices managed via Intune PC Agent
     * @param value Value to set for the enrolledDeviceCount property.
     */
    public set enrolledDeviceCount(value: number | undefined) {
        if(value) {
            this._enrolledDeviceCount = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceExchangeAccessStateSummary": n => { this.deviceExchangeAccessStateSummary = n.getObjectValue<DeviceExchangeAccessStateSummaryImpl>(createDeviceExchangeAccessStateSummaryFromDiscriminatorValue); },
            "deviceOperatingSystemSummary": n => { this.deviceOperatingSystemSummary = n.getObjectValue<DeviceOperatingSystemSummaryImpl>(createDeviceOperatingSystemSummaryFromDiscriminatorValue); },
            "dualEnrolledDeviceCount": n => { this.dualEnrolledDeviceCount = n.getNumberValue(); },
            "enrolledDeviceCount": n => { this.enrolledDeviceCount = n.getNumberValue(); },
            "mdmEnrolledCount": n => { this.mdmEnrolledCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the mdmEnrolledCount property value. The number of devices enrolled in MDM
     * @returns a integer
     */
    public get mdmEnrolledCount() {
        return this._mdmEnrolledCount;
    };
    /**
     * Sets the mdmEnrolledCount property value. The number of devices enrolled in MDM
     * @param value Value to set for the mdmEnrolledCount property.
     */
    public set mdmEnrolledCount(value: number | undefined) {
        if(value) {
            this._mdmEnrolledCount = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceExchangeAccessStateSummary){
            writer.writeObjectValue<DeviceExchangeAccessStateSummaryImpl>("deviceExchangeAccessStateSummary", (this.deviceExchangeAccessStateSummary instanceof DeviceExchangeAccessStateSummaryImpl? this.deviceExchangeAccessStateSummary as DeviceExchangeAccessStateSummaryImpl: new DeviceExchangeAccessStateSummaryImpl(this.deviceExchangeAccessStateSummary)));
        }
        if(this.deviceOperatingSystemSummary){
            writer.writeObjectValue<DeviceOperatingSystemSummaryImpl>("deviceOperatingSystemSummary", (this.deviceOperatingSystemSummary instanceof DeviceOperatingSystemSummaryImpl? this.deviceOperatingSystemSummary as DeviceOperatingSystemSummaryImpl: new DeviceOperatingSystemSummaryImpl(this.deviceOperatingSystemSummary)));
        }
        if(this.dualEnrolledDeviceCount){
            writer.writeNumberValue("dualEnrolledDeviceCount", this.dualEnrolledDeviceCount);
        }
        if(this.enrolledDeviceCount){
            writer.writeNumberValue("enrolledDeviceCount", this.enrolledDeviceCount);
        }
        if(this.mdmEnrolledCount){
            writer.writeNumberValue("mdmEnrolledCount", this.mdmEnrolledCount);
        }
    };
}
