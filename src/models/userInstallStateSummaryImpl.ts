import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {DeviceInstallState} from './deviceInstallState';
import {DeviceInstallStateImpl, EntityImpl} from './index';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for the installation state summary for a user. */
export class UserInstallStateSummaryImpl extends EntityImpl implements UserInstallStateSummary {
    /** The install state of the eBook. */
    private _deviceStates?: DeviceInstallState[] | undefined;
    /** Failed Device Count. */
    private _failedDeviceCount?: number | undefined;
    /** Installed Device Count. */
    private _installedDeviceCount?: number | undefined;
    /** Not installed device count. */
    private _notInstalledDeviceCount?: number | undefined;
    /** User name. */
    private _userName?: string | undefined;
    /**
     * Instantiates a new userInstallStateSummary and sets the default values.
     * @param userInstallStateSummaryParameterValue 
     */
    public constructor(userInstallStateSummaryParameterValue?: UserInstallStateSummary | undefined) {
        super(userInstallStateSummaryParameterValue);
        this._deviceStates = userInstallStateSummaryParameterValue?.deviceStates;
        this._failedDeviceCount = userInstallStateSummaryParameterValue?.failedDeviceCount;
        this._installedDeviceCount = userInstallStateSummaryParameterValue?.installedDeviceCount;
        this._notInstalledDeviceCount = userInstallStateSummaryParameterValue?.notInstalledDeviceCount;
        this._userName = userInstallStateSummaryParameterValue?.userName;
    };
    /**
     * Gets the deviceStates property value. The install state of the eBook.
     * @returns a DeviceInstallStateInterface
     */
    public get deviceStates() {
        return this._deviceStates;
    };
    /**
     * Sets the deviceStates property value. The install state of the eBook.
     * @param value Value to set for the deviceStates property.
     */
    public set deviceStates(value: DeviceInstallState[] | undefined) {
        if(value) {
            const deviceStatesArrValue: DeviceInstallStateImpl[] = [];
            this.deviceStates?.forEach(element => {
                deviceStatesArrValue.push((element instanceof DeviceInstallStateImpl? element as DeviceInstallStateImpl:new DeviceInstallStateImpl(element)));
            });
            this._deviceStates = deviceStatesArrValue;
        }
    };
    /**
     * Gets the failedDeviceCount property value. Failed Device Count.
     * @returns a integer
     */
    public get failedDeviceCount() {
        return this._failedDeviceCount;
    };
    /**
     * Sets the failedDeviceCount property value. Failed Device Count.
     * @param value Value to set for the failedDeviceCount property.
     */
    public set failedDeviceCount(value: number | undefined) {
        if(value) {
            this._failedDeviceCount = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceStates": n => { this.deviceStates = n.getCollectionOfObjectValues<DeviceInstallStateImpl>(createDeviceInstallStateFromDiscriminatorValue); },
            "failedDeviceCount": n => { this.failedDeviceCount = n.getNumberValue(); },
            "installedDeviceCount": n => { this.installedDeviceCount = n.getNumberValue(); },
            "notInstalledDeviceCount": n => { this.notInstalledDeviceCount = n.getNumberValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
        };
    };
    /**
     * Gets the installedDeviceCount property value. Installed Device Count.
     * @returns a integer
     */
    public get installedDeviceCount() {
        return this._installedDeviceCount;
    };
    /**
     * Sets the installedDeviceCount property value. Installed Device Count.
     * @param value Value to set for the installedDeviceCount property.
     */
    public set installedDeviceCount(value: number | undefined) {
        if(value) {
            this._installedDeviceCount = value;
        }
    };
    /**
     * Gets the notInstalledDeviceCount property value. Not installed device count.
     * @returns a integer
     */
    public get notInstalledDeviceCount() {
        return this._notInstalledDeviceCount;
    };
    /**
     * Sets the notInstalledDeviceCount property value. Not installed device count.
     * @param value Value to set for the notInstalledDeviceCount property.
     */
    public set notInstalledDeviceCount(value: number | undefined) {
        if(value) {
            this._notInstalledDeviceCount = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceStates && this.deviceStates.length != 0){        const deviceStatesArrValue: DeviceInstallStateImpl[] = [];
        this.deviceStates?.forEach(element => {
            deviceStatesArrValue.push((element instanceof DeviceInstallStateImpl? element as DeviceInstallStateImpl:new DeviceInstallStateImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceInstallStateImpl>("deviceStates", deviceStatesArrValue);
        }
        if(this.failedDeviceCount){
            writer.writeNumberValue("failedDeviceCount", this.failedDeviceCount);
        }
        if(this.installedDeviceCount){
            writer.writeNumberValue("installedDeviceCount", this.installedDeviceCount);
        }
        if(this.notInstalledDeviceCount){
            writer.writeNumberValue("notInstalledDeviceCount", this.notInstalledDeviceCount);
        }
        if(this.userName){
            writer.writeStringValue("userName", this.userName);
        }
    };
    /**
     * Gets the userName property value. User name.
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. User name.
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        if(value) {
            this._userName = value;
        }
    };
}
