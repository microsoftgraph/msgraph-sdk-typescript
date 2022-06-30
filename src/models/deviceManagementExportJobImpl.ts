import {DeviceManagementExportJob} from './deviceManagementExportJob';
import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Entity representing a job to export a report */
export class DeviceManagementExportJobImpl extends EntityImpl implements DeviceManagementExportJob {
    /** Time that the exported report expires */
    private _expirationDateTime?: Date | undefined;
    /** Filters applied on the report */
    private _filter?: string | undefined;
    /** Format of the exported report. Possible values are: csv, pdf. */
    private _format?: DeviceManagementReportFileFormat | undefined;
    /** Configures how the requested export job is localized. Possible values are: localizedValuesAsAdditionalColumn, replaceLocalizableValues. */
    private _localizationType?: DeviceManagementExportJobLocalizationType | undefined;
    /** Name of the report */
    private _reportName?: string | undefined;
    /** Time that the exported report was requested */
    private _requestDateTime?: Date | undefined;
    /** Columns selected from the report */
    private _select?: string[] | undefined;
    /** A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id. */
    private _snapshotId?: string | undefined;
    /** Status of the export job. Possible values are: unknown, notStarted, inProgress, completed, failed. */
    private _status?: DeviceManagementReportStatus | undefined;
    /** Temporary location of the exported report */
    private _url?: string | undefined;
    /**
     * Instantiates a new deviceManagementExportJob and sets the default values.
     * @param deviceManagementExportJobParameterValue 
     */
    public constructor(deviceManagementExportJobParameterValue?: DeviceManagementExportJob | undefined) {
        super(deviceManagementExportJobParameterValue);
        this._expirationDateTime = deviceManagementExportJobParameterValue?.expirationDateTime;
        this._filter = deviceManagementExportJobParameterValue?.filter;
        this._format = deviceManagementExportJobParameterValue?.format;
        this._localizationType = deviceManagementExportJobParameterValue?.localizationType;
        this._reportName = deviceManagementExportJobParameterValue?.reportName;
        this._requestDateTime = deviceManagementExportJobParameterValue?.requestDateTime;
        this._select = deviceManagementExportJobParameterValue?.select;
        this._snapshotId = deviceManagementExportJobParameterValue?.snapshotId;
        this._status = deviceManagementExportJobParameterValue?.status;
        this._url = deviceManagementExportJobParameterValue?.url;
    };
    /**
     * Gets the expirationDateTime property value. Time that the exported report expires
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Time that the exported report expires
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * Gets the filter property value. Filters applied on the report
     * @returns a string
     */
    public get filter() {
        return this._filter;
    };
    /**
     * Sets the filter property value. Filters applied on the report
     * @param value Value to set for the filter property.
     */
    public set filter(value: string | undefined) {
        if(value) {
            this._filter = value;
        }
    };
    /**
     * Gets the format property value. Format of the exported report. Possible values are: csv, pdf.
     * @returns a deviceManagementReportFileFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Format of the exported report. Possible values are: csv, pdf.
     * @param value Value to set for the format property.
     */
    public set format(value: DeviceManagementReportFileFormat | undefined) {
        if(value) {
            this._format = value;
        }
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
     * Gets the localizationType property value. Configures how the requested export job is localized. Possible values are: localizedValuesAsAdditionalColumn, replaceLocalizableValues.
     * @returns a deviceManagementExportJobLocalizationType
     */
    public get localizationType() {
        return this._localizationType;
    };
    /**
     * Sets the localizationType property value. Configures how the requested export job is localized. Possible values are: localizedValuesAsAdditionalColumn, replaceLocalizableValues.
     * @param value Value to set for the localizationType property.
     */
    public set localizationType(value: DeviceManagementExportJobLocalizationType | undefined) {
        if(value) {
            this._localizationType = value;
        }
    };
    /**
     * Gets the reportName property value. Name of the report
     * @returns a string
     */
    public get reportName() {
        return this._reportName;
    };
    /**
     * Sets the reportName property value. Name of the report
     * @param value Value to set for the reportName property.
     */
    public set reportName(value: string | undefined) {
        if(value) {
            this._reportName = value;
        }
    };
    /**
     * Gets the requestDateTime property value. Time that the exported report was requested
     * @returns a Date
     */
    public get requestDateTime() {
        return this._requestDateTime;
    };
    /**
     * Sets the requestDateTime property value. Time that the exported report was requested
     * @param value Value to set for the requestDateTime property.
     */
    public set requestDateTime(value: Date | undefined) {
        if(value) {
            this._requestDateTime = value;
        }
    };
    /**
     * Gets the select property value. Columns selected from the report
     * @returns a string
     */
    public get select() {
        return this._select;
    };
    /**
     * Sets the select property value. Columns selected from the report
     * @param value Value to set for the select property.
     */
    public set select(value: string[] | undefined) {
        if(value) {
            this._select = value;
        }
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
    /**
     * Gets the snapshotId property value. A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id.
     * @returns a string
     */
    public get snapshotId() {
        return this._snapshotId;
    };
    /**
     * Sets the snapshotId property value. A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id.
     * @param value Value to set for the snapshotId property.
     */
    public set snapshotId(value: string | undefined) {
        if(value) {
            this._snapshotId = value;
        }
    };
    /**
     * Gets the status property value. Status of the export job. Possible values are: unknown, notStarted, inProgress, completed, failed.
     * @returns a deviceManagementReportStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the export job. Possible values are: unknown, notStarted, inProgress, completed, failed.
     * @param value Value to set for the status property.
     */
    public set status(value: DeviceManagementReportStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the url property value. Temporary location of the exported report
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. Temporary location of the exported report
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        if(value) {
            this._url = value;
        }
    };
}
