import {EntityImpl} from './index';
import {ManagedDeviceMobileAppConfigurationUserSummary} from './managedDeviceMobileAppConfigurationUserSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties, inherited properties and actions for an MDM mobile app configuration user status summary. */
export class ManagedDeviceMobileAppConfigurationUserSummaryImpl extends EntityImpl implements ManagedDeviceMobileAppConfigurationUserSummary, Parsable {
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
     * Instantiates a new managedDeviceMobileAppConfigurationUserSummary and sets the default values.
     * @param managedDeviceMobileAppConfigurationUserSummaryParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationUserSummaryParameterValue?: ManagedDeviceMobileAppConfigurationUserSummary | undefined) {
        super();
        this.configurationVersion = managedDeviceMobileAppConfigurationUserSummaryParameterValue?.configurationVersion ;
        this.errorCount = managedDeviceMobileAppConfigurationUserSummaryParameterValue?.errorCount ;
        this.failedCount = managedDeviceMobileAppConfigurationUserSummaryParameterValue?.failedCount ;
        this.lastUpdateDateTime = managedDeviceMobileAppConfigurationUserSummaryParameterValue?.lastUpdateDateTime ;
        this.notApplicableCount = managedDeviceMobileAppConfigurationUserSummaryParameterValue?.notApplicableCount ;
        this.pendingCount = managedDeviceMobileAppConfigurationUserSummaryParameterValue?.pendingCount ;
        this.successCount = managedDeviceMobileAppConfigurationUserSummaryParameterValue?.successCount ;
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
