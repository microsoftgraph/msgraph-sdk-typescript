import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Entity representing a job to export a report */
export class DeviceManagementExportJobImpl extends EntityImpl implements DeviceManagementExportJob, Parsable {
    /** Time that the exported report expires */
    public expirationDateTime?: Date | undefined;
    /** Filters applied on the report */
    public filter?: string | undefined;
    /** Format of the exported report. Possible values are: csv, pdf. */
    public format?: DeviceManagementReportFileFormat | undefined;
    /** Configures how the requested export job is localized. Possible values are: localizedValuesAsAdditionalColumn, replaceLocalizableValues. */
    public localizationType?: DeviceManagementExportJobLocalizationType | undefined;
    /** Name of the report */
    public reportName?: string | undefined;
    /** Time that the exported report was requested */
    public requestDateTime?: Date | undefined;
    /** Columns selected from the report */
    public select?: string[] | undefined;
    /** A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id. */
    public snapshotId?: string | undefined;
    /** Status of the export job. Possible values are: unknown, notStarted, inProgress, completed, failed. */
    public status?: DeviceManagementReportStatus | undefined;
    /** Temporary location of the exported report */
    public url?: string | undefined;
    /**
     * Instantiates a new deviceManagementExportJob and sets the default values.
     * @param deviceManagementExportJobParameterValue 
     */
    public constructor(deviceManagementExportJobParameterValue?: DeviceManagementExportJob | undefined) {
        super();
        this.expirationDateTime = deviceManagementExportJobParameterValue?.expirationDateTime ;
        this.filter = deviceManagementExportJobParameterValue?.filter ;
        this.format = deviceManagementExportJobParameterValue?.format ;
        this.localizationType = deviceManagementExportJobParameterValue?.localizationType ;
        this.reportName = deviceManagementExportJobParameterValue?.reportName ;
        this.requestDateTime = deviceManagementExportJobParameterValue?.requestDateTime ;
        this.select = deviceManagementExportJobParameterValue?.select ;
        this.snapshotId = deviceManagementExportJobParameterValue?.snapshotId ;
        this.status = deviceManagementExportJobParameterValue?.status ;
        this.url = deviceManagementExportJobParameterValue?.url ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "filter": n => { this.filter = n.getStringValue(); },
            "format": n => { this.format = n.getEnumValue<DeviceManagementReportFileFormat>(DeviceManagementReportFileFormat); },
            "localizationType": n => { this.localizationType = n.getEnumValue<DeviceManagementExportJobLocalizationType>(DeviceManagementExportJobLocalizationType); },
            "reportName": n => { this.reportName = n.getStringValue(); },
            "requestDateTime": n => { this.requestDateTime = n.getDateValue(); },
            "select": n => { this.select = n.getCollectionOfPrimitiveValues<string>(); },
            "snapshotId": n => { this.snapshotId = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<DeviceManagementReportStatus>(DeviceManagementReportStatus); },
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
        if(this.expirationDateTime){
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.filter){
        writer.writeStringValue("filter", this.filter);
        }
        if(this.format){
        writer.writeEnumValue<DeviceManagementReportFileFormat>("format", this.format);
        }
        if(this.localizationType){
        writer.writeEnumValue<DeviceManagementExportJobLocalizationType>("localizationType", this.localizationType);
        }
        if(this.reportName){
        writer.writeStringValue("reportName", this.reportName);
        }
        if(this.requestDateTime){
        writer.writeDateValue("requestDateTime", this.requestDateTime);
        }
        if(this.select){
        writer.writeCollectionOfPrimitiveValues<string>("select", this.select);
        }
        if(this.snapshotId){
        writer.writeStringValue("snapshotId", this.snapshotId);
        }
        if(this.status){
        writer.writeEnumValue<DeviceManagementReportStatus>("status", this.status);
        }
        if(this.url){
        writer.writeStringValue("url", this.url);
        }
    };
}
