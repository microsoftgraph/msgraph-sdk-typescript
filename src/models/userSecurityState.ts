import {EmailRole} from './emailRole';
import {AdminMember1} from './index';
import {LogonType} from './logonType';
import {UserAccountSecurityType} from './userAccountSecurityType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSecurityState implements AdditionalDataHolder, Parsable {
    /** AAD User object identifier (GUID) - represents the physical/multi-account user entity. */
    private _aadUserId?: string | undefined;
    /** Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName). */
    private _accountName?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** NetBIOS/Active Directory domain of user account (that is, domain/account format). */
    private _domainName?: string | undefined;
    /** For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient. */
    private _emailRole?: EmailRole | AdminMember1 | undefined;
    /** Indicates whether the user logged on through a VPN. */
    private _isVpn?: boolean | undefined;
    /** Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _logonDateTime?: Date | undefined;
    /** User sign-in ID. */
    private _logonId?: string | undefined;
    /** IP Address the sign-in request originated from. */
    private _logonIp?: string | undefined;
    /** Location (by IP address mapping) associated with a user sign-in event by this user. */
    private _logonLocation?: string | undefined;
    /** Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service. */
    private _logonType?: LogonType | AdminMember1 | undefined;
    /** Active Directory (on-premises) Security Identifier (SID) of the user. */
    private _onPremisesSecurityIdentifier?: string | undefined;
    /** Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a percentage. */
    private _riskScore?: string | undefined;
    /** User account type (group membership), per Windows definition. Possible values are: unknown, standard, power, administrator. */
    private _userAccountType?: UserAccountSecurityType | AdminMember1 | undefined;
    /** User sign-in name - internet format: (user account name)@(user account DNS domain name). */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the aadUserId property value. AAD User object identifier (GUID) - represents the physical/multi-account user entity.
     * @returns a string
     */
    public get aadUserId() {
        return this._aadUserId;
    };
    /**
     * Sets the aadUserId property value. AAD User object identifier (GUID) - represents the physical/multi-account user entity.
     * @param value Value to set for the aadUserId property.
     */
    public set aadUserId(value: string | undefined) {
        this._aadUserId = value;
    };
    /**
     * Gets the accountName property value. Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName).
     * @returns a string
     */
    public get accountName() {
        return this._accountName;
    };
    /**
     * Sets the accountName property value. Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName).
     * @param value Value to set for the accountName property.
     */
    public set accountName(value: string | undefined) {
        this._accountName = value;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new userSecurityState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the domainName property value. NetBIOS/Active Directory domain of user account (that is, domain/account format).
     * @returns a string
     */
    public get domainName() {
        return this._domainName;
    };
    /**
     * Sets the domainName property value. NetBIOS/Active Directory domain of user account (that is, domain/account format).
     * @param value Value to set for the domainName property.
     */
    public set domainName(value: string | undefined) {
        this._domainName = value;
    };
    /**
     * Gets the emailRole property value. For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient.
     * @returns a admin
     */
    public get emailRole() {
        return this._emailRole;
    };
    /**
     * Sets the emailRole property value. For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient.
     * @param value Value to set for the emailRole property.
     */
    public set emailRole(value: EmailRole | AdminMember1 | undefined) {
        this._emailRole = value;
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
            "emailRole": n => { this.emailRole = n.getObjectValue<EmailRole>(createEmailRoleFromDiscriminatorValue); },
            "isVpn": n => { this.isVpn = n.getBooleanValue(); },
            "logonDateTime": n => { this.logonDateTime = n.getDateValue(); },
            "logonId": n => { this.logonId = n.getStringValue(); },
            "logonIp": n => { this.logonIp = n.getStringValue(); },
            "logonLocation": n => { this.logonLocation = n.getStringValue(); },
            "logonType": n => { this.logonType = n.getObjectValue<LogonType>(createLogonTypeFromDiscriminatorValue); },
            "onPremisesSecurityIdentifier": n => { this.onPremisesSecurityIdentifier = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
            "userAccountType": n => { this.userAccountType = n.getObjectValue<UserAccountSecurityType>(createUserAccountSecurityTypeFromDiscriminatorValue); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the isVpn property value. Indicates whether the user logged on through a VPN.
     * @returns a boolean
     */
    public get isVpn() {
        return this._isVpn;
    };
    /**
     * Sets the isVpn property value. Indicates whether the user logged on through a VPN.
     * @param value Value to set for the isVpn property.
     */
    public set isVpn(value: boolean | undefined) {
        this._isVpn = value;
    };
    /**
     * Gets the logonDateTime property value. Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get logonDateTime() {
        return this._logonDateTime;
    };
    /**
     * Sets the logonDateTime property value. Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the logonDateTime property.
     */
    public set logonDateTime(value: Date | undefined) {
        this._logonDateTime = value;
    };
    /**
     * Gets the logonId property value. User sign-in ID.
     * @returns a string
     */
    public get logonId() {
        return this._logonId;
    };
    /**
     * Sets the logonId property value. User sign-in ID.
     * @param value Value to set for the logonId property.
     */
    public set logonId(value: string | undefined) {
        this._logonId = value;
    };
    /**
     * Gets the logonIp property value. IP Address the sign-in request originated from.
     * @returns a string
     */
    public get logonIp() {
        return this._logonIp;
    };
    /**
     * Sets the logonIp property value. IP Address the sign-in request originated from.
     * @param value Value to set for the logonIp property.
     */
    public set logonIp(value: string | undefined) {
        this._logonIp = value;
    };
    /**
     * Gets the logonLocation property value. Location (by IP address mapping) associated with a user sign-in event by this user.
     * @returns a string
     */
    public get logonLocation() {
        return this._logonLocation;
    };
    /**
     * Sets the logonLocation property value. Location (by IP address mapping) associated with a user sign-in event by this user.
     * @param value Value to set for the logonLocation property.
     */
    public set logonLocation(value: string | undefined) {
        this._logonLocation = value;
    };
    /**
     * Gets the logonType property value. Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service.
     * @returns a admin
     */
    public get logonType() {
        return this._logonType;
    };
    /**
     * Sets the logonType property value. Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service.
     * @param value Value to set for the logonType property.
     */
    public set logonType(value: LogonType | AdminMember1 | undefined) {
        this._logonType = value;
    };
    /**
     * Gets the onPremisesSecurityIdentifier property value. Active Directory (on-premises) Security Identifier (SID) of the user.
     * @returns a string
     */
    public get onPremisesSecurityIdentifier() {
        return this._onPremisesSecurityIdentifier;
    };
    /**
     * Sets the onPremisesSecurityIdentifier property value. Active Directory (on-premises) Security Identifier (SID) of the user.
     * @param value Value to set for the onPremisesSecurityIdentifier property.
     */
    public set onPremisesSecurityIdentifier(value: string | undefined) {
        this._onPremisesSecurityIdentifier = value;
    };
    /**
     * Gets the riskScore property value. Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Sets the riskScore property value. Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("aadUserId", this.aadUserId);
        writer.writeStringValue("accountName", this.accountName);
        writer.writeStringValue("domainName", this.domainName);
        writer.writeObjectValue<EmailRole>("emailRole", this.emailRole);
        writer.writeBooleanValue("isVpn", this.isVpn);
        writer.writeDateValue("logonDateTime", this.logonDateTime);
        writer.writeStringValue("logonId", this.logonId);
        writer.writeStringValue("logonIp", this.logonIp);
        writer.writeStringValue("logonLocation", this.logonLocation);
        writer.writeObjectValue<LogonType>("logonType", this.logonType);
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        writer.writeStringValue("riskScore", this.riskScore);
        writer.writeObjectValue<UserAccountSecurityType>("userAccountType", this.userAccountType);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userAccountType property value. User account type (group membership), per Windows definition. Possible values are: unknown, standard, power, administrator.
     * @returns a admin
     */
    public get userAccountType() {
        return this._userAccountType;
    };
    /**
     * Sets the userAccountType property value. User account type (group membership), per Windows definition. Possible values are: unknown, standard, power, administrator.
     * @param value Value to set for the userAccountType property.
     */
    public set userAccountType(value: UserAccountSecurityType | AdminMember1 | undefined) {
        this._userAccountType = value;
    };
    /**
     * Gets the userPrincipalName property value. User sign-in name - internet format: (user account name)@(user account DNS domain name).
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. User sign-in name - internet format: (user account name)@(user account DNS domain name).
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
