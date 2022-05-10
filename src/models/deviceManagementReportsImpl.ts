import {createDeviceManagementExportJobFromDiscriminatorValue} from './createDeviceManagementExportJobFromDiscriminatorValue';
import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementReports} from './deviceManagementReports';
import {DeviceManagementExportJobImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementReportsImpl extends EntityImpl implements DeviceManagementReports, Parsable {
    /** Entity representing a job to export a report  */
    exportJobs?: DeviceManagementExportJob[] | undefined;
    /**
     * Instantiates a new deviceManagementReports and sets the default values.
     * @param deviceManagementReportsParameterValue 
     */
    public constructor(deviceManagementReportsParameterValue?: DeviceManagementReports | undefined) {
        super();
        this.exportJobs = deviceManagementReportsParameterValue?.exportJobs ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "exportJobs": n => { this.exportJobs = n.getCollectionOfObjectValues<DeviceManagementExportJobImpl>(createDeviceManagementExportJobFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.exportJobs){
        const exportJobsArrValue: DeviceManagementExportJobImpl[] = []; this.exportJobs?.forEach(element => {exportJobsArrValue.push(new DeviceManagementExportJobImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceManagementExportJobImpl>("exportJobs", exportJobsArrValue);
        }
    };
}
