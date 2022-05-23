import {ComplianceStatus} from './complianceStatus';
import {createSettingSourceFromDiscriminatorValue} from './createSettingSourceFromDiscriminatorValue';
import {DeviceCompliancePolicySettingState} from './deviceCompliancePolicySettingState';
import {SettingSourceImpl} from './index';
import {SettingSource} from './settingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Compilance Policy Setting State for a given device. */
export class DeviceCompliancePolicySettingStateImpl implements AdditionalDataHolder, DeviceCompliancePolicySettingState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Current value of setting on device */
    public currentValue?: string | undefined;
    /** Error code for the setting */
    public errorCode?: number | undefined;
    /** Error description */
    public errorDescription?: string | undefined;
    /** Name of setting instance that is being reported. */
    public instanceDisplayName?: string | undefined;
    /** The setting that is being reported */
    public setting?: string | undefined;
    /** Localized/user friendly setting name that is being reported */
    public settingName?: string | undefined;
    /** Contributing policies */
    public sources?: SettingSource[] | undefined;
    /** The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    public state?: ComplianceStatus | undefined;
    /** UserEmail */
    public userEmail?: string | undefined;
    /** UserId */
    public userId?: string | undefined;
    /** UserName */
    public userName?: string | undefined;
    /** UserPrincipalName. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new deviceCompliancePolicySettingState and sets the default values.
     * @param deviceCompliancePolicySettingStateParameterValue 
     */
    public constructor(deviceCompliancePolicySettingStateParameterValue?: DeviceCompliancePolicySettingState | undefined) {
        this.additionalData = deviceCompliancePolicySettingStateParameterValue?.additionalData ? deviceCompliancePolicySettingStateParameterValue?.additionalData! : {}
        this.currentValue = deviceCompliancePolicySettingStateParameterValue?.currentValue ;
        this.errorCode = deviceCompliancePolicySettingStateParameterValue?.errorCode ;
        this.errorDescription = deviceCompliancePolicySettingStateParameterValue?.errorDescription ;
        this.instanceDisplayName = deviceCompliancePolicySettingStateParameterValue?.instanceDisplayName ;
        this.setting = deviceCompliancePolicySettingStateParameterValue?.setting ;
        this.settingName = deviceCompliancePolicySettingStateParameterValue?.settingName ;
        this.sources = deviceCompliancePolicySettingStateParameterValue?.sources ;
        this.state = deviceCompliancePolicySettingStateParameterValue?.state ;
        this.userEmail = deviceCompliancePolicySettingStateParameterValue?.userEmail ;
        this.userId = deviceCompliancePolicySettingStateParameterValue?.userId ;
        this.userName = deviceCompliancePolicySettingStateParameterValue?.userName ;
        this.userPrincipalName = deviceCompliancePolicySettingStateParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "currentValue": n => { this.currentValue = n.getStringValue(); },
            "errorCode": n => { this.errorCode = n.getNumberValue(); },
            "errorDescription": n => { this.errorDescription = n.getStringValue(); },
            "instanceDisplayName": n => { this.instanceDisplayName = n.getStringValue(); },
            "setting": n => { this.setting = n.getStringValue(); },
            "settingName": n => { this.settingName = n.getStringValue(); },
            "sources": n => { this.sources = n.getCollectionOfObjectValues<SettingSourceImpl>(createSettingSourceFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
            "userEmail": n => { this.userEmail = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.currentValue){
        writer.writeStringValue("currentValue", this.currentValue);
        }
        if(this.errorCode){
        writer.writeNumberValue("errorCode", this.errorCode);
        }
        if(this.errorDescription){
        writer.writeStringValue("errorDescription", this.errorDescription);
        }
        if(this.instanceDisplayName){
        writer.writeStringValue("instanceDisplayName", this.instanceDisplayName);
        }
        if(this.setting){
        writer.writeStringValue("setting", this.setting);
        }
        if(this.settingName){
        writer.writeStringValue("settingName", this.settingName);
        }
        if(this.sources && this.sources.length != 0){        const sourcesArrValue: SettingSourceImpl[] = []; this.sources?.forEach(element => {sourcesArrValue.push(new SettingSourceImpl(element));});
        writer.writeCollectionOfObjectValues<SettingSourceImpl>("sources", sourcesArrValue);
        }
        if(this.state){
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        }
        if(this.userEmail){
        writer.writeStringValue("userEmail", this.userEmail);
        }
        if(this.userId){
        writer.writeStringValue("userId", this.userId);
        }
        if(this.userName){
        writer.writeStringValue("userName", this.userName);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
