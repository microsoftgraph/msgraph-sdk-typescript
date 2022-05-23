import {ComplianceInformation} from './complianceInformation';
import {createComplianceInformationFromDiscriminatorValue} from './createComplianceInformationFromDiscriminatorValue';
import {createSecureScoreControlStateUpdateFromDiscriminatorValue} from './createSecureScoreControlStateUpdateFromDiscriminatorValue';
import {createSecurityVendorInformationFromDiscriminatorValue} from './createSecurityVendorInformationFromDiscriminatorValue';
import {ComplianceInformationImpl, EntityImpl, SecureScoreControlStateUpdateImpl, SecurityVendorInformationImpl} from './index';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {SecureScoreControlStateUpdate} from './secureScoreControlStateUpdate';
import {SecurityVendorInformation} from './securityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the security singleton. */
export class SecureScoreControlProfileImpl extends EntityImpl implements Parsable, SecureScoreControlProfile {
    /** Control action type (Config, Review, Behavior). */
    public actionType?: string | undefined;
    /** URL to where the control can be actioned. */
    public actionUrl?: string | undefined;
    /** GUID string for tenant ID. */
    public azureTenantId?: string | undefined;
    /** The collection of compliance information associated with secure score control */
    public complianceInformation?: ComplianceInformation[] | undefined;
    /** Control action category (Account, Data, Device, Apps, Infrastructure). */
    public controlCategory?: string | undefined;
    /** Flag to indicate where the tenant has marked a control (ignore, thirdParty, reviewed) (supports update). */
    public controlStateUpdates?: SecureScoreControlStateUpdate[] | undefined;
    /** Flag to indicate if a control is depreciated. */
    public deprecated?: boolean | undefined;
    /** Resource cost of implemmentating control (low, moderate, high). */
    public implementationCost?: string | undefined;
    /** Time at which the control profile entity was last modified. The Timestamp type represents date and time */
    public lastModifiedDateTime?: Date | undefined;
    /** Current obtained max score on specified date. */
    public maxScore?: number | undefined;
    /** Microsoft's stack ranking of control. */
    public rank?: number | undefined;
    /** Description of what the control will help remediate. */
    public remediation?: string | undefined;
    /** Description of the impact on users of the remediation. */
    public remediationImpact?: string | undefined;
    /** Service that owns the control (Exchange, Sharepoint, Azure AD). */
    public service?: string | undefined;
    /** List of threats the control mitigates (accountBreach,dataDeletion,dataExfiltration,dataSpillage,elevationOfPrivilege,maliciousInsider,passwordCracking,phishingOrWhaling,spoofing). */
    public threats?: string[] | undefined;
    /** Control tier (Core, Defense in Depth, Advanced.) */
    public tier?: string | undefined;
    /** Title of the control. */
    public title?: string | undefined;
    /** User impact of implementing control (low, moderate, high). */
    public userImpact?: string | undefined;
    /** The vendorInformation property */
    public vendorInformation?: SecurityVendorInformation | undefined;
    /**
     * Instantiates a new secureScoreControlProfile and sets the default values.
     * @param secureScoreControlProfileParameterValue 
     */
    public constructor(secureScoreControlProfileParameterValue?: SecureScoreControlProfile | undefined) {
        super();
        this.actionType = secureScoreControlProfileParameterValue?.actionType ;
        this.actionUrl = secureScoreControlProfileParameterValue?.actionUrl ;
        this.azureTenantId = secureScoreControlProfileParameterValue?.azureTenantId ;
        this.complianceInformation = secureScoreControlProfileParameterValue?.complianceInformation ;
        this.controlCategory = secureScoreControlProfileParameterValue?.controlCategory ;
        this.controlStateUpdates = secureScoreControlProfileParameterValue?.controlStateUpdates ;
        this.deprecated = secureScoreControlProfileParameterValue?.deprecated ;
        this.implementationCost = secureScoreControlProfileParameterValue?.implementationCost ;
        this.lastModifiedDateTime = secureScoreControlProfileParameterValue?.lastModifiedDateTime ;
        this.maxScore = secureScoreControlProfileParameterValue?.maxScore ;
        this.rank = secureScoreControlProfileParameterValue?.rank ;
        this.remediation = secureScoreControlProfileParameterValue?.remediation ;
        this.remediationImpact = secureScoreControlProfileParameterValue?.remediationImpact ;
        this.service = secureScoreControlProfileParameterValue?.service ;
        this.threats = secureScoreControlProfileParameterValue?.threats ;
        this.tier = secureScoreControlProfileParameterValue?.tier ;
        this.title = secureScoreControlProfileParameterValue?.title ;
        this.userImpact = secureScoreControlProfileParameterValue?.userImpact ;
        this.vendorInformation = secureScoreControlProfileParameterValue?.vendorInformation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "actionType": n => { this.actionType = n.getStringValue(); },
            "actionUrl": n => { this.actionUrl = n.getStringValue(); },
            "azureTenantId": n => { this.azureTenantId = n.getStringValue(); },
            "complianceInformation": n => { this.complianceInformation = n.getCollectionOfObjectValues<ComplianceInformationImpl>(createComplianceInformationFromDiscriminatorValue); },
            "controlCategory": n => { this.controlCategory = n.getStringValue(); },
            "controlStateUpdates": n => { this.controlStateUpdates = n.getCollectionOfObjectValues<SecureScoreControlStateUpdateImpl>(createSecureScoreControlStateUpdateFromDiscriminatorValue); },
            "deprecated": n => { this.deprecated = n.getBooleanValue(); },
            "implementationCost": n => { this.implementationCost = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "maxScore": n => { this.maxScore = n.getNumberValue(); },
            "rank": n => { this.rank = n.getNumberValue(); },
            "remediation": n => { this.remediation = n.getStringValue(); },
            "remediationImpact": n => { this.remediationImpact = n.getStringValue(); },
            "service": n => { this.service = n.getStringValue(); },
            "threats": n => { this.threats = n.getCollectionOfPrimitiveValues<string>(); },
            "tier": n => { this.tier = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "userImpact": n => { this.userImpact = n.getStringValue(); },
            "vendorInformation": n => { this.vendorInformation = n.getObjectValue<SecurityVendorInformationImpl>(createSecurityVendorInformationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.actionType){
        writer.writeStringValue("actionType", this.actionType);
        }
        if(this.actionUrl){
        writer.writeStringValue("actionUrl", this.actionUrl);
        }
        if(this.azureTenantId){
        writer.writeStringValue("azureTenantId", this.azureTenantId);
        }
        if(this.complianceInformation && this.complianceInformation.length != 0){        const complianceInformationArrValue: ComplianceInformationImpl[] = []; this.complianceInformation?.forEach(element => {complianceInformationArrValue.push(new ComplianceInformationImpl(element));});
        writer.writeCollectionOfObjectValues<ComplianceInformationImpl>("complianceInformation", complianceInformationArrValue);
        }
        if(this.controlCategory){
        writer.writeStringValue("controlCategory", this.controlCategory);
        }
        if(this.controlStateUpdates && this.controlStateUpdates.length != 0){        const controlStateUpdatesArrValue: SecureScoreControlStateUpdateImpl[] = []; this.controlStateUpdates?.forEach(element => {controlStateUpdatesArrValue.push(new SecureScoreControlStateUpdateImpl(element));});
        writer.writeCollectionOfObjectValues<SecureScoreControlStateUpdateImpl>("controlStateUpdates", controlStateUpdatesArrValue);
        }
        if(this.deprecated){
        writer.writeBooleanValue("deprecated", this.deprecated);
        }
        if(this.implementationCost){
        writer.writeStringValue("implementationCost", this.implementationCost);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.maxScore){
        writer.writeNumberValue("maxScore", this.maxScore);
        }
        if(this.rank){
        writer.writeNumberValue("rank", this.rank);
        }
        if(this.remediation){
        writer.writeStringValue("remediation", this.remediation);
        }
        if(this.remediationImpact){
        writer.writeStringValue("remediationImpact", this.remediationImpact);
        }
        if(this.service){
        writer.writeStringValue("service", this.service);
        }
        if(this.threats){
        writer.writeCollectionOfPrimitiveValues<string>("threats", this.threats);
        }
        if(this.tier){
        writer.writeStringValue("tier", this.tier);
        }
        if(this.title){
        writer.writeStringValue("title", this.title);
        }
        if(this.userImpact){
        writer.writeStringValue("userImpact", this.userImpact);
        }
        if(this.vendorInformation){
        writer.writeObjectValue<SecurityVendorInformationImpl>("vendorInformation", new SecurityVendorInformationImpl(this.vendorInformation));
        }
    };
}
