import {DeviceConfigurationUserOverview} from './deviceConfigurationUserOverview';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagement singleton. */
export class DeviceConfigurationUserOverviewImpl extends EntityImpl implements DeviceConfigurationUserOverview, Parsable {
    /** Version of the policy for that overview */
    public configurationVersion?: number | undefined;
    /** Number of error Users */
    public errorCount?: number | undefined;
    /** Number of failed Users */
    public failedCount?: number | undefined;
    /** Last update time */
    public lastUpdateDateTime?: Date | undefined;
    /** Number of not applicable users */
    public notApplicableCount?: number | undefined;
    /** Number of pending Users */
    public pendingCount?: number | undefined;
    /** Number of succeeded Users */
    public successCount?: number | undefined;
    /**
     * Instantiates a new deviceConfigurationUserOverview and sets the default values.
     * @param deviceConfigurationUserOverviewParameterValue 
     */
    public constructor(deviceConfigurationUserOverviewParameterValue?: DeviceConfigurationUserOverview | undefined) {
        super();
        this.configurationVersion = deviceConfigurationUserOverviewParameterValue?.configurationVersion ;
        this.errorCount = deviceConfigurationUserOverviewParameterValue?.errorCount ;
        this.failedCount = deviceConfigurationUserOverviewParameterValue?.failedCount ;
        this.lastUpdateDateTime = deviceConfigurationUserOverviewParameterValue?.lastUpdateDateTime ;
        this.notApplicableCount = deviceConfigurationUserOverviewParameterValue?.notApplicableCount ;
        this.pendingCount = deviceConfigurationUserOverviewParameterValue?.pendingCount ;
        this.successCount = deviceConfigurationUserOverviewParameterValue?.successCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "configurationVersion": n => { this.configurationVersion = n.getNumberValue(); },
            "errorCount": n => { this.errorCount = n.getNumberValue(); },
            "failedCount": n => { this.failedCount = n.getNumberValue(); },
            "lastUpdateDateTime": n => { this.lastUpdateDateTime = n.getDateValue(); },
            "notApplicableCount": n => { this.notApplicableCount = n.getNumberValue(); },
            "pendingCount": n => { this.pendingCount = n.getNumberValue(); },
            "successCount": n => { this.successCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.configurationVersion){
        writer.writeNumberValue("configurationVersion", this.configurationVersion);
        }
        if(this.errorCount){
        writer.writeNumberValue("errorCount", this.errorCount);
        }
        if(this.failedCount){
        writer.writeNumberValue("failedCount", this.failedCount);
        }
        if(this.lastUpdateDateTime){
        writer.writeDateValue("lastUpdateDateTime", this.lastUpdateDateTime);
        }
        if(this.notApplicableCount){
        writer.writeNumberValue("notApplicableCount", this.notApplicableCount);
        }
        if(this.pendingCount){
        writer.writeNumberValue("pendingCount", this.pendingCount);
        }
        if(this.successCount){
        writer.writeNumberValue("successCount", this.successCount);
        }
    };
}
