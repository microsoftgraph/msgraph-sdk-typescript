import {EBookInstallSummary} from './eBookInstallSummary';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for the installation summary of a book for a device. */
export class EBookInstallSummaryImpl extends EntityImpl implements EBookInstallSummary {
    /** Number of Devices that have failed to install this book. */
    private _failedDeviceCount?: number | undefined;
    /** Number of Users that have 1 or more device that failed to install this book. */
    private _failedUserCount?: number | undefined;
    /** Number of Devices that have successfully installed this book. */
    private _installedDeviceCount?: number | undefined;
    /** Number of Users whose devices have all succeeded to install this book. */
    private _installedUserCount?: number | undefined;
    /** Number of Devices that does not have this book installed. */
    private _notInstalledDeviceCount?: number | undefined;
    /** Number of Users that did not install this book. */
    private _notInstalledUserCount?: number | undefined;
    /**
     * Instantiates a new eBookInstallSummary and sets the default values.
     * @param eBookInstallSummaryParameterValue 
     */
    public constructor(eBookInstallSummaryParameterValue?: EBookInstallSummary | undefined) {
        super(eBookInstallSummaryParameterValue);
        this._failedDeviceCount = eBookInstallSummaryParameterValue?.failedDeviceCount;
        this._failedUserCount = eBookInstallSummaryParameterValue?.failedUserCount;
        this._installedDeviceCount = eBookInstallSummaryParameterValue?.installedDeviceCount;
        this._installedUserCount = eBookInstallSummaryParameterValue?.installedUserCount;
        this._notInstalledDeviceCount = eBookInstallSummaryParameterValue?.notInstalledDeviceCount;
        this._notInstalledUserCount = eBookInstallSummaryParameterValue?.notInstalledUserCount;
    };
    /**
     * Gets the failedDeviceCount property value. Number of Devices that have failed to install this book.
     * @returns a integer
     */
    public get failedDeviceCount() {
        return this._failedDeviceCount;
    };
    /**
     * Sets the failedDeviceCount property value. Number of Devices that have failed to install this book.
     * @param value Value to set for the failedDeviceCount property.
     */
    public set failedDeviceCount(value: number | undefined) {
        if(value) {
            this._failedDeviceCount = value;
        }
    };
    /**
     * Gets the failedUserCount property value. Number of Users that have 1 or more device that failed to install this book.
     * @returns a integer
     */
    public get failedUserCount() {
        return this._failedUserCount;
    };
    /**
     * Sets the failedUserCount property value. Number of Users that have 1 or more device that failed to install this book.
     * @param value Value to set for the failedUserCount property.
     */
    public set failedUserCount(value: number | undefined) {
        if(value) {
            this._failedUserCount = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "failedDeviceCount": n => { this.failedDeviceCount = n.getNumberValue(); },
            "failedUserCount": n => { this.failedUserCount = n.getNumberValue(); },
            "installedDeviceCount": n => { this.installedDeviceCount = n.getNumberValue(); },
            "installedUserCount": n => { this.installedUserCount = n.getNumberValue(); },
            "notInstalledDeviceCount": n => { this.notInstalledDeviceCount = n.getNumberValue(); },
            "notInstalledUserCount": n => { this.notInstalledUserCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the installedDeviceCount property value. Number of Devices that have successfully installed this book.
     * @returns a integer
     */
    public get installedDeviceCount() {
        return this._installedDeviceCount;
    };
    /**
     * Sets the installedDeviceCount property value. Number of Devices that have successfully installed this book.
     * @param value Value to set for the installedDeviceCount property.
     */
    public set installedDeviceCount(value: number | undefined) {
        if(value) {
            this._installedDeviceCount = value;
        }
    };
    /**
     * Gets the installedUserCount property value. Number of Users whose devices have all succeeded to install this book.
     * @returns a integer
     */
    public get installedUserCount() {
        return this._installedUserCount;
    };
    /**
     * Sets the installedUserCount property value. Number of Users whose devices have all succeeded to install this book.
     * @param value Value to set for the installedUserCount property.
     */
    public set installedUserCount(value: number | undefined) {
        if(value) {
            this._installedUserCount = value;
        }
    };
    /**
     * Gets the notInstalledDeviceCount property value. Number of Devices that does not have this book installed.
     * @returns a integer
     */
    public get notInstalledDeviceCount() {
        return this._notInstalledDeviceCount;
    };
    /**
     * Sets the notInstalledDeviceCount property value. Number of Devices that does not have this book installed.
     * @param value Value to set for the notInstalledDeviceCount property.
     */
    public set notInstalledDeviceCount(value: number | undefined) {
        if(value) {
            this._notInstalledDeviceCount = value;
        }
    };
    /**
     * Gets the notInstalledUserCount property value. Number of Users that did not install this book.
     * @returns a integer
     */
    public get notInstalledUserCount() {
        return this._notInstalledUserCount;
    };
    /**
     * Sets the notInstalledUserCount property value. Number of Users that did not install this book.
     * @param value Value to set for the notInstalledUserCount property.
     */
    public set notInstalledUserCount(value: number | undefined) {
        if(value) {
            this._notInstalledUserCount = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.failedDeviceCount){
            writer.writeNumberValue("failedDeviceCount", this.failedDeviceCount);
        }
        if(this.failedUserCount){
            writer.writeNumberValue("failedUserCount", this.failedUserCount);
        }
        if(this.installedDeviceCount){
            writer.writeNumberValue("installedDeviceCount", this.installedDeviceCount);
        }
        if(this.installedUserCount){
            writer.writeNumberValue("installedUserCount", this.installedUserCount);
        }
        if(this.notInstalledDeviceCount){
            writer.writeNumberValue("notInstalledDeviceCount", this.notInstalledDeviceCount);
        }
        if(this.notInstalledUserCount){
            writer.writeNumberValue("notInstalledUserCount", this.notInstalledUserCount);
        }
    };
}
