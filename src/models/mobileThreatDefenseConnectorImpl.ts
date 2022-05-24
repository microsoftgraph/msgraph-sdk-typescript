import {EntityImpl} from './index';
import {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Entity which represents a connection to Mobile threat defense partner. */
export class MobileThreatDefenseConnectorImpl extends EntityImpl implements MobileThreatDefenseConnector, Parsable {
    /** For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    public androidDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** For Android, set whether data from the data sync partner should be used during compliance evaluations */
    public androidEnabled?: boolean | undefined;
    /** For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    public iosDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** For IOS, get or set whether data from the data sync partner should be used during compliance evaluations */
    public iosEnabled?: boolean | undefined;
    /** DateTime of last Heartbeat recieved from the Data Sync Partner */
    public lastHeartbeatDateTime?: Date | undefined;
    /** Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive. */
    public partnerState?: MobileThreatPartnerTenantState | undefined;
    /** Get or Set days the per tenant tolerance to unresponsiveness for this partner integration */
    public partnerUnresponsivenessThresholdInDays?: number | undefined;
    /** Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner */
    public partnerUnsupportedOsVersionBlocked?: boolean | undefined;
    /**
     * Instantiates a new mobileThreatDefenseConnector and sets the default values.
     * @param mobileThreatDefenseConnectorParameterValue 
     */
    public constructor(mobileThreatDefenseConnectorParameterValue?: MobileThreatDefenseConnector | undefined) {
        super();
        this.androidDeviceBlockedOnMissingPartnerData = mobileThreatDefenseConnectorParameterValue?.androidDeviceBlockedOnMissingPartnerData ;
        this.androidEnabled = mobileThreatDefenseConnectorParameterValue?.androidEnabled ;
        this.iosDeviceBlockedOnMissingPartnerData = mobileThreatDefenseConnectorParameterValue?.iosDeviceBlockedOnMissingPartnerData ;
        this.iosEnabled = mobileThreatDefenseConnectorParameterValue?.iosEnabled ;
        this.lastHeartbeatDateTime = mobileThreatDefenseConnectorParameterValue?.lastHeartbeatDateTime ;
        this.partnerState = mobileThreatDefenseConnectorParameterValue?.partnerState ;
        this.partnerUnresponsivenessThresholdInDays = mobileThreatDefenseConnectorParameterValue?.partnerUnresponsivenessThresholdInDays ;
        this.partnerUnsupportedOsVersionBlocked = mobileThreatDefenseConnectorParameterValue?.partnerUnsupportedOsVersionBlocked ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "androidDeviceBlockedOnMissingPartnerData": n => { this.androidDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
            "androidEnabled": n => { this.androidEnabled = n.getBooleanValue(); },
            "iosDeviceBlockedOnMissingPartnerData": n => { this.iosDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); },
            "iosEnabled": n => { this.iosEnabled = n.getBooleanValue(); },
            "lastHeartbeatDateTime": n => { this.lastHeartbeatDateTime = n.getDateValue(); },
            "partnerState": n => { this.partnerState = n.getEnumValue<MobileThreatPartnerTenantState>(MobileThreatPartnerTenantState); },
            "partnerUnresponsivenessThresholdInDays": n => { this.partnerUnresponsivenessThresholdInDays = n.getNumberValue(); },
            "partnerUnsupportedOsVersionBlocked": n => { this.partnerUnsupportedOsVersionBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.androidDeviceBlockedOnMissingPartnerData){
        writer.writeBooleanValue("androidDeviceBlockedOnMissingPartnerData", this.androidDeviceBlockedOnMissingPartnerData);
        }
        if(this.androidEnabled){
        writer.writeBooleanValue("androidEnabled", this.androidEnabled);
        }
        if(this.iosDeviceBlockedOnMissingPartnerData){
        writer.writeBooleanValue("iosDeviceBlockedOnMissingPartnerData", this.iosDeviceBlockedOnMissingPartnerData);
        }
        if(this.iosEnabled){
        writer.writeBooleanValue("iosEnabled", this.iosEnabled);
        }
        if(this.lastHeartbeatDateTime){
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        }
        if(this.partnerState){
        writer.writeEnumValue<MobileThreatPartnerTenantState>("partnerState", this.partnerState);
        }
        if(this.partnerUnresponsivenessThresholdInDays){
        writer.writeNumberValue("partnerUnresponsivenessThresholdInDays", this.partnerUnresponsivenessThresholdInDays);
        }
        if(this.partnerUnsupportedOsVersionBlocked){
        writer.writeBooleanValue("partnerUnsupportedOsVersionBlocked", this.partnerUnsupportedOsVersionBlocked);
        }
    };
}
