import {AverageComparativeScore} from './averageComparativeScore';
import {ControlScore} from './controlScore';
import {createAverageComparativeScoreFromDiscriminatorValue} from './createAverageComparativeScoreFromDiscriminatorValue';
import {createControlScoreFromDiscriminatorValue} from './createControlScoreFromDiscriminatorValue';
import {createSecurityVendorInformationFromDiscriminatorValue} from './createSecurityVendorInformationFromDiscriminatorValue';
import {AverageComparativeScoreImpl, ControlScoreImpl, EntityImpl, SecurityVendorInformationImpl} from './index';
import {SecureScore} from './secureScore';
import {SecurityVendorInformation} from './securityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the security singleton. */
export class SecureScoreImpl extends EntityImpl implements Parsable, SecureScore {
    /** Active user count of the given tenant. */
    public activeUserCount?: number | undefined;
    /** Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope. */
    public averageComparativeScores?: AverageComparativeScore[] | undefined;
    /** GUID string for tenant ID. */
    public azureTenantId?: string | undefined;
    /** Contains tenant scores for a set of controls. */
    public controlScores?: ControlScore[] | undefined;
    /** The date when the entity is created. */
    public createdDateTime?: Date | undefined;
    /** Tenant current attained score on specified date. */
    public currentScore?: number | undefined;
    /** Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint). */
    public enabledServices?: string[] | undefined;
    /** Licensed user count of the given tenant. */
    public licensedUserCount?: number | undefined;
    /** Tenant maximum possible score on specified date. */
    public maxScore?: number | undefined;
    /** Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required. */
    public vendorInformation?: SecurityVendorInformation | undefined;
    /**
     * Instantiates a new secureScore and sets the default values.
     * @param secureScoreParameterValue 
     */
    public constructor(secureScoreParameterValue?: SecureScore | undefined) {
        super();
        this.activeUserCount = secureScoreParameterValue?.activeUserCount ;
        this.averageComparativeScores = secureScoreParameterValue?.averageComparativeScores ;
        this.azureTenantId = secureScoreParameterValue?.azureTenantId ;
        this.controlScores = secureScoreParameterValue?.controlScores ;
        this.createdDateTime = secureScoreParameterValue?.createdDateTime ;
        this.currentScore = secureScoreParameterValue?.currentScore ;
        this.enabledServices = secureScoreParameterValue?.enabledServices ;
        this.licensedUserCount = secureScoreParameterValue?.licensedUserCount ;
        this.maxScore = secureScoreParameterValue?.maxScore ;
        this.vendorInformation = secureScoreParameterValue?.vendorInformation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeUserCount": n => { this.activeUserCount = n.getNumberValue(); },
            "averageComparativeScores": n => { this.averageComparativeScores = n.getCollectionOfObjectValues<AverageComparativeScoreImpl>(createAverageComparativeScoreFromDiscriminatorValue); },
            "azureTenantId": n => { this.azureTenantId = n.getStringValue(); },
            "controlScores": n => { this.controlScores = n.getCollectionOfObjectValues<ControlScoreImpl>(createControlScoreFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "currentScore": n => { this.currentScore = n.getNumberValue(); },
            "enabledServices": n => { this.enabledServices = n.getCollectionOfPrimitiveValues<string>(); },
            "licensedUserCount": n => { this.licensedUserCount = n.getNumberValue(); },
            "maxScore": n => { this.maxScore = n.getNumberValue(); },
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
        if(this.activeUserCount){
        writer.writeNumberValue("activeUserCount", this.activeUserCount);
        }
        if(this.averageComparativeScores && this.averageComparativeScores.length != 0){        const averageComparativeScoresArrValue: AverageComparativeScoreImpl[] = []; this.averageComparativeScores?.forEach(element => {averageComparativeScoresArrValue.push(new AverageComparativeScoreImpl(element));});
        writer.writeCollectionOfObjectValues<AverageComparativeScoreImpl>("averageComparativeScores", averageComparativeScoresArrValue);
        }
        if(this.azureTenantId){
        writer.writeStringValue("azureTenantId", this.azureTenantId);
        }
        if(this.controlScores && this.controlScores.length != 0){        const controlScoresArrValue: ControlScoreImpl[] = []; this.controlScores?.forEach(element => {controlScoresArrValue.push(new ControlScoreImpl(element));});
        writer.writeCollectionOfObjectValues<ControlScoreImpl>("controlScores", controlScoresArrValue);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.currentScore){
        writer.writeNumberValue("currentScore", this.currentScore);
        }
        if(this.enabledServices){
        writer.writeCollectionOfPrimitiveValues<string>("enabledServices", this.enabledServices);
        }
        if(this.licensedUserCount){
        writer.writeNumberValue("licensedUserCount", this.licensedUserCount);
        }
        if(this.maxScore){
        writer.writeNumberValue("maxScore", this.maxScore);
        }
        if(this.vendorInformation){
        writer.writeObjectValue<SecurityVendorInformationImpl>("vendorInformation", new SecurityVendorInformationImpl(this.vendorInformation));
        }
    };
}
