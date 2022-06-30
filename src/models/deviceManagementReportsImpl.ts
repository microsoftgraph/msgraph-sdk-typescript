import {createDeviceManagementExportJobFromDiscriminatorValue} from './createDeviceManagementExportJobFromDiscriminatorValue';
import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementReports} from './deviceManagementReports';
import {DeviceManagementExportJobImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Singleton entity that acts as a container for all reports functionality. */
export class DeviceManagementReportsImpl extends EntityImpl implements DeviceManagementReports {
    /** Entity representing a job to export a report */
    private _exportJobs?: DeviceManagementExportJob[] | undefined;
    /**
     * Instantiates a new deviceManagementReports and sets the default values.
     * @param deviceManagementReportsParameterValue 
     */
    public constructor(deviceManagementReportsParameterValue?: DeviceManagementReports | undefined) {
        super(deviceManagementReportsParameterValue);
        this._exportJobs = deviceManagementReportsParameterValue?.exportJobs;
    };
    /**
     * Gets the exportJobs property value. Entity representing a job to export a report
     * @returns a DeviceManagementExportJobInterface
     */
    public get exportJobs() {
        return this._exportJobs;
    };
    /**
     * Sets the exportJobs property value. Entity representing a job to export a report
     * @param value Value to set for the exportJobs property.
     */
    public set exportJobs(value: DeviceManagementExportJob[] | undefined) {
        if(value) {
            const exportJobsArrValue: DeviceManagementExportJobImpl[] = [];
            this.exportJobs?.forEach(element => {
                exportJobsArrValue.push((element instanceof DeviceManagementExportJobImpl? element:new DeviceManagementExportJobImpl(element)));
            });
            this._exportJobs = exportJobsArrValue;
        }
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
        if(this.exportJobs && this.exportJobs.length != 0){        const exportJobsArrValue: DeviceManagementExportJobImpl[] = [];
        this.exportJobs?.forEach(element => {
            exportJobsArrValue.push((element instanceof DeviceManagementExportJobImpl? element:new DeviceManagementExportJobImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceManagementExportJobImpl>("exportJobs", exportJobsArrValue);
        }
    };
}
