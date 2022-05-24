import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {DeviceInstallState} from './deviceInstallState';
import {DeviceInstallStateImpl, EntityImpl} from './index';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for the installation state summary for a user. */
export class UserInstallStateSummaryImpl extends EntityImpl implements Parsable, UserInstallStateSummary {
    /** The install state of the eBook. */
    public deviceStates?: DeviceInstallState[] | undefined;
    /** Failed Device Count. */
    public failedDeviceCount?: number | undefined;
    /** Installed Device Count. */
    public installedDeviceCount?: number | undefined;
    /** Not installed device count. */
    public notInstalledDeviceCount?: number | undefined;
    /** User name. */
    public userName?: string | undefined;
    /**
     * Instantiates a new userInstallStateSummary and sets the default values.
     * @param userInstallStateSummaryParameterValue 
     */
    public constructor(userInstallStateSummaryParameterValue?: UserInstallStateSummary | undefined) {
        super();
        this.deviceStates = userInstallStateSummaryParameterValue?.deviceStates ;
        this.failedDeviceCount = userInstallStateSummaryParameterValue?.failedDeviceCount ;
        this.installedDeviceCount = userInstallStateSummaryParameterValue?.installedDeviceCount ;
        this.notInstalledDeviceCount = userInstallStateSummaryParameterValue?.notInstalledDeviceCount ;
        this.userName = userInstallStateSummaryParameterValue?.userName ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceStates && this.deviceStates.length != 0){        const deviceStatesArrValue: DeviceInstallStateImpl[] = []; this.deviceStates?.forEach(element => {deviceStatesArrValue.push(new DeviceInstallStateImpl(element));});
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
}
