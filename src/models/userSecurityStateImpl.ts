import {EmailRole} from './emailRole';
import {LogonType} from './logonType';
import {UserAccountSecurityType} from './userAccountSecurityType';
import {UserSecurityState} from './userSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSecurityStateImpl implements AdditionalDataHolder, Parsable, UserSecurityState {
    /** AAD User object identifier (GUID) - represents the physical/multi-account user entity. */
    public aadUserId?: string | undefined;
    /** Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName). */
    public accountName?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** NetBIOS/Active Directory domain of user account (that is, domain/account format). */
    public domainName?: string | undefined;
    /** For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient. */
    public emailRole?: EmailRole | undefined;
    /** Indicates whether the user logged on through a VPN. */
    public isVpn?: boolean | undefined;
    /** Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public logonDateTime?: Date | undefined;
    /** User sign-in ID. */
    public logonId?: string | undefined;
    /** IP Address the sign-in request originated from. */
    public logonIp?: string | undefined;
    /** Location (by IP address mapping) associated with a user sign-in event by this user. */
    public logonLocation?: string | undefined;
    /** Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service. */
    public logonType?: LogonType | undefined;
    /** Active Directory (on-premises) Security Identifier (SID) of the user. */
    public onPremisesSecurityIdentifier?: string | undefined;
    /** Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a percentage. */
    public riskScore?: string | undefined;
    /** User account type (group membership), per Windows definition. Possible values are: unknown, standard, power, administrator. */
    public userAccountType?: UserAccountSecurityType | undefined;
    /** User sign-in name - internet format: (user account name)@(user account DNS domain name). */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new userSecurityState and sets the default values.
     * @param userSecurityStateParameterValue 
     */
    public constructor(userSecurityStateParameterValue?: UserSecurityState | undefined) {
        this.aadUserId = userSecurityStateParameterValue?.aadUserId ;
        this.accountName = userSecurityStateParameterValue?.accountName ;
        this.additionalData = userSecurityStateParameterValue?.additionalData ? userSecurityStateParameterValue?.additionalData! : {}
        this.domainName = userSecurityStateParameterValue?.domainName ;
        this.emailRole = userSecurityStateParameterValue?.emailRole ;
        this.isVpn = userSecurityStateParameterValue?.isVpn ;
        this.logonDateTime = userSecurityStateParameterValue?.logonDateTime ;
        this.logonId = userSecurityStateParameterValue?.logonId ;
        this.logonIp = userSecurityStateParameterValue?.logonIp ;
        this.logonLocation = userSecurityStateParameterValue?.logonLocation ;
        this.logonType = userSecurityStateParameterValue?.logonType ;
        this.onPremisesSecurityIdentifier = userSecurityStateParameterValue?.onPremisesSecurityIdentifier ;
        this.riskScore = userSecurityStateParameterValue?.riskScore ;
        this.userAccountType = userSecurityStateParameterValue?.userAccountType ;
        this.userPrincipalName = userSecurityStateParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aadUserId": n => { this.aadUserId = n.getStringValue(); },
            "accountName": n => { this.accountName = n.getStringValue(); },
            "domainName": n => { this.domainName = n.getStringValue(); },
            "emailRole": n => { this.emailRole = n.getEnumValue<EmailRole>(EmailRole); },
            "isVpn": n => { this.isVpn = n.getBooleanValue(); },
            "logonDateTime": n => { this.logonDateTime = n.getDateValue(); },
            "logonId": n => { this.logonId = n.getStringValue(); },
            "logonIp": n => { this.logonIp = n.getStringValue(); },
            "logonLocation": n => { this.logonLocation = n.getStringValue(); },
            "logonType": n => { this.logonType = n.getEnumValue<LogonType>(LogonType); },
            "onPremisesSecurityIdentifier": n => { this.onPremisesSecurityIdentifier = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
            "userAccountType": n => { this.userAccountType = n.getEnumValue<UserAccountSecurityType>(UserAccountSecurityType); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.aadUserId){
        writer.writeStringValue("aadUserId", this.aadUserId);
        }
        if(this.accountName){
        writer.writeStringValue("accountName", this.accountName);
        }
        if(this.domainName){
        writer.writeStringValue("domainName", this.domainName);
        }
        if(this.emailRole){
        writer.writeEnumValue<EmailRole>("emailRole", this.emailRole);
        }
        if(this.isVpn){
        writer.writeBooleanValue("isVpn", this.isVpn);
        }
        if(this.logonDateTime){
        writer.writeDateValue("logonDateTime", this.logonDateTime);
        }
        if(this.logonId){
        writer.writeStringValue("logonId", this.logonId);
        }
        if(this.logonIp){
        writer.writeStringValue("logonIp", this.logonIp);
        }
        if(this.logonLocation){
        writer.writeStringValue("logonLocation", this.logonLocation);
        }
        if(this.logonType){
        writer.writeEnumValue<LogonType>("logonType", this.logonType);
        }
        if(this.onPremisesSecurityIdentifier){
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        }
        if(this.riskScore){
        writer.writeStringValue("riskScore", this.riskScore);
        }
        if(this.userAccountType){
        writer.writeEnumValue<UserAccountSecurityType>("userAccountType", this.userAccountType);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
