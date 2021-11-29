import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceOverview extends Entity implements Parsable {
    /** Distribution of Exchange Access State in Intune  */
    private _deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary | undefined;
    /** Device operating system summary.  */
    private _deviceOperatingSystemSummary?: DeviceOperatingSystemSummary | undefined;
    /** The number of devices enrolled in both MDM and EAS  */
    private _dualEnrolledDeviceCount?: number | undefined;
    /** Total enrolled device count. Does not include PC devices managed via Intune PC Agent  */
    private _enrolledDeviceCount?: number | undefined;
    /** The number of devices enrolled in MDM  */
    private _mdmEnrolledCount?: number | undefined;
    /**
     * Instantiates a new managedDeviceOverview and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceExchangeAccessStateSummary property value. Distribution of Exchange Access State in Intune
     * @returns a deviceExchangeAccessStateSummary
     */
    public get deviceExchangeAccessStateSummary() {
        return this._deviceExchangeAccessStateSummary;
    };
    /**
     * Gets the deviceOperatingSystemSummary property value. Device operating system summary.
     * @returns a deviceOperatingSystemSummary
     */
    public get deviceOperatingSystemSummary() {
        return this._deviceOperatingSystemSummary;
    };
    /**
     * Gets the dualEnrolledDeviceCount property value. The number of devices enrolled in both MDM and EAS
     * @returns a integer
     */
    public get dualEnrolledDeviceCount() {
        return this._dualEnrolledDeviceCount;
    };
    /**
     * Gets the enrolledDeviceCount property value. Total enrolled device count. Does not include PC devices managed via Intune PC Agent
     * @returns a integer
     */
    public get enrolledDeviceCount() {
        return this._enrolledDeviceCount;
    };
    /**
     * Gets the mdmEnrolledCount property value. The number of devices enrolled in MDM
     * @returns a integer
     */
    public get mdmEnrolledCount() {
        return this._mdmEnrolledCount;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["deviceExchangeAccessStateSummary", (o, n) => { (o as unknown as ManagedDeviceOverview).deviceExchangeAccessStateSummary = n.getObjectValue<DeviceExchangeAccessStateSummary>(DeviceExchangeAccessStateSummary); }],
            ["deviceOperatingSystemSummary", (o, n) => { (o as unknown as ManagedDeviceOverview).deviceOperatingSystemSummary = n.getObjectValue<DeviceOperatingSystemSummary>(DeviceOperatingSystemSummary); }],
            ["dualEnrolledDeviceCount", (o, n) => { (o as unknown as ManagedDeviceOverview).dualEnrolledDeviceCount = n.getNumberValue(); }],
            ["enrolledDeviceCount", (o, n) => { (o as unknown as ManagedDeviceOverview).enrolledDeviceCount = n.getNumberValue(); }],
            ["mdmEnrolledCount", (o, n) => { (o as unknown as ManagedDeviceOverview).mdmEnrolledCount = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DeviceExchangeAccessStateSummary>("deviceExchangeAccessStateSummary", this.deviceExchangeAccessStateSummary);
        writer.writeObjectValue<DeviceOperatingSystemSummary>("deviceOperatingSystemSummary", this.deviceOperatingSystemSummary);
        writer.writeNumberValue("dualEnrolledDeviceCount", this.dualEnrolledDeviceCount);
        writer.writeNumberValue("enrolledDeviceCount", this.enrolledDeviceCount);
        writer.writeNumberValue("mdmEnrolledCount", this.mdmEnrolledCount);
    };
    /**
     * Sets the deviceExchangeAccessStateSummary property value. Distribution of Exchange Access State in Intune
     * @param value Value to set for the deviceExchangeAccessStateSummary property.
     */
    public set deviceExchangeAccessStateSummary(value: DeviceExchangeAccessStateSummary | undefined) {
        this._deviceExchangeAccessStateSummary = value;
    };
    /**
     * Sets the deviceOperatingSystemSummary property value. Device operating system summary.
     * @param value Value to set for the deviceOperatingSystemSummary property.
     */
    public set deviceOperatingSystemSummary(value: DeviceOperatingSystemSummary | undefined) {
        this._deviceOperatingSystemSummary = value;
    };
    /**
     * Sets the dualEnrolledDeviceCount property value. The number of devices enrolled in both MDM and EAS
     * @param value Value to set for the dualEnrolledDeviceCount property.
     */
    public set dualEnrolledDeviceCount(value: number | undefined) {
        this._dualEnrolledDeviceCount = value;
    };
    /**
     * Sets the enrolledDeviceCount property value. Total enrolled device count. Does not include PC devices managed via Intune PC Agent
     * @param value Value to set for the enrolledDeviceCount property.
     */
    public set enrolledDeviceCount(value: number | undefined) {
        this._enrolledDeviceCount = value;
    };
    /**
     * Sets the mdmEnrolledCount property value. The number of devices enrolled in MDM
     * @param value Value to set for the mdmEnrolledCount property.
     */
    public set mdmEnrolledCount(value: number | undefined) {
        this._mdmEnrolledCount = value;
    };
}
