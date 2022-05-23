import {EBookInstallSummary} from './eBookInstallSummary';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for the installation summary of a book for a device. */
export class EBookInstallSummaryImpl extends EntityImpl implements EBookInstallSummary, Parsable {
    /** Number of Devices that have failed to install this book. */
    public failedDeviceCount?: number | undefined;
    /** Number of Users that have 1 or more device that failed to install this book. */
    public failedUserCount?: number | undefined;
    /** Number of Devices that have successfully installed this book. */
    public installedDeviceCount?: number | undefined;
    /** Number of Users whose devices have all succeeded to install this book. */
    public installedUserCount?: number | undefined;
    /** Number of Devices that does not have this book installed. */
    public notInstalledDeviceCount?: number | undefined;
    /** Number of Users that did not install this book. */
    public notInstalledUserCount?: number | undefined;
    /**
     * Instantiates a new eBookInstallSummary and sets the default values.
     * @param eBookInstallSummaryParameterValue 
     */
    public constructor(eBookInstallSummaryParameterValue?: EBookInstallSummary | undefined) {
        super();
        this.failedDeviceCount = eBookInstallSummaryParameterValue?.failedDeviceCount ;
        this.failedUserCount = eBookInstallSummaryParameterValue?.failedUserCount ;
        this.installedDeviceCount = eBookInstallSummaryParameterValue?.installedDeviceCount ;
        this.installedUserCount = eBookInstallSummaryParameterValue?.installedUserCount ;
        this.notInstalledDeviceCount = eBookInstallSummaryParameterValue?.notInstalledDeviceCount ;
        this.notInstalledUserCount = eBookInstallSummaryParameterValue?.notInstalledUserCount ;
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
