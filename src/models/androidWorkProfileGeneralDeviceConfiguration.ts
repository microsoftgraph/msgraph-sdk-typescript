import {AndroidWorkProfileCrossProfileDataSharingType} from './androidWorkProfileCrossProfileDataSharingType';
import {AndroidWorkProfileDefaultAppPermissionPolicyType} from './androidWorkProfileDefaultAppPermissionPolicyType';
import {AndroidWorkProfileRequiredPasswordType} from './androidWorkProfileRequiredPasswordType';
import {DeviceConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidWorkProfileGeneralDeviceConfiguration extends DeviceConfiguration implements Parsable {
    /** Indicates whether or not to block fingerprint unlock. */
    private _passwordBlockFingerprintUnlock?: boolean | undefined;
    /** Indicates whether or not to block Smart Lock and other trust agents. */
    private _passwordBlockTrustAgents?: boolean | undefined;
    /** Number of days before the password expires. Valid values 1 to 365 */
    private _passwordExpirationDays?: number | undefined;
    /** Minimum length of passwords. Valid values 4 to 16 */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity before the screen times out. */
    private _passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Type of password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols. */
    private _passwordRequiredType?: AndroidWorkProfileRequiredPasswordType | undefined;
    /** Number of sign in failures allowed before factory reset. Valid values 1 to 16 */
    private _passwordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Require the Android Verify apps feature is turned on. */
    private _securityRequireVerifyApps?: boolean | undefined;
    /** Block users from adding/removing accounts in work profile. */
    private _workProfileBlockAddingAccounts?: boolean | undefined;
    /** Block work profile camera. */
    private _workProfileBlockCamera?: boolean | undefined;
    /** Block display work profile caller ID in personal profile. */
    private _workProfileBlockCrossProfileCallerId?: boolean | undefined;
    /** Block work profile contacts availability in personal profile. */
    private _workProfileBlockCrossProfileContactsSearch?: boolean | undefined;
    /** Boolean that indicates if the setting disallow cross profile copy/paste is enabled. */
    private _workProfileBlockCrossProfileCopyPaste?: boolean | undefined;
    /** Indicates whether or not to block notifications while device locked. */
    private _workProfileBlockNotificationsWhileDeviceLocked?: boolean | undefined;
    /** Block screen capture in work profile. */
    private _workProfileBlockScreenCapture?: boolean | undefined;
    /** Allow bluetooth devices to access enterprise contacts. */
    private _workProfileBluetoothEnableContactSharing?: boolean | undefined;
    /** Type of data sharing that is allowed. Possible values are: deviceDefault, preventAny, allowPersonalToWork, noRestrictions. */
    private _workProfileDataSharingType?: AndroidWorkProfileCrossProfileDataSharingType | undefined;
    /** Type of password that is required. Possible values are: deviceDefault, prompt, autoGrant, autoDeny. */
    private _workProfileDefaultAppPermissionPolicy?: AndroidWorkProfileDefaultAppPermissionPolicyType | undefined;
    /** Indicates whether or not to block fingerprint unlock for work profile. */
    private _workProfilePasswordBlockFingerprintUnlock?: boolean | undefined;
    /** Indicates whether or not to block Smart Lock and other trust agents for work profile. */
    private _workProfilePasswordBlockTrustAgents?: boolean | undefined;
    /** Number of days before the work profile password expires. Valid values 1 to 365 */
    private _workProfilePasswordExpirationDays?: number | undefined;
    /** Minimum length of work profile password. Valid values 4 to 16 */
    private _workProfilePasswordMinimumLength?: number | undefined;
    /** Minimum # of letter characters required in work profile password. Valid values 1 to 10 */
    private _workProfilePasswordMinLetterCharacters?: number | undefined;
    /** Minimum # of lower-case characters required in work profile password. Valid values 1 to 10 */
    private _workProfilePasswordMinLowerCaseCharacters?: number | undefined;
    /** Minimum # of non-letter characters required in work profile password. Valid values 1 to 10 */
    private _workProfilePasswordMinNonLetterCharacters?: number | undefined;
    /** Minimum # of numeric characters required in work profile password. Valid values 1 to 10 */
    private _workProfilePasswordMinNumericCharacters?: number | undefined;
    /** Minimum # of symbols required in work profile password. Valid values 1 to 10 */
    private _workProfilePasswordMinSymbolCharacters?: number | undefined;
    /** Minimum # of upper-case characters required in work profile password. Valid values 1 to 10 */
    private _workProfilePasswordMinUpperCaseCharacters?: number | undefined;
    /** Minutes of inactivity before the screen times out. */
    private _workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous work profile passwords to block. Valid values 0 to 24 */
    private _workProfilePasswordPreviousPasswordBlockCount?: number | undefined;
    /** Type of work profile password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols. */
    private _workProfilePasswordRequiredType?: AndroidWorkProfileRequiredPasswordType | undefined;
    /** Number of sign in failures allowed before work profile is removed and all corporate data deleted. Valid values 1 to 16 */
    private _workProfilePasswordSignInFailureCountBeforeFactoryReset?: number | undefined;
    /** Password is required or not for work profile */
    private _workProfileRequirePassword?: boolean | undefined;
    /**
     * Instantiates a new AndroidWorkProfileGeneralDeviceConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "passwordBlockFingerprintUnlock": n => { this.passwordBlockFingerprintUnlock = n.getBooleanValue(); },
            "passwordBlockTrustAgents": n => { this.passwordBlockTrustAgents = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeScreenTimeout": n => { this.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<AndroidWorkProfileRequiredPasswordType>(AndroidWorkProfileRequiredPasswordType); },
            "passwordSignInFailureCountBeforeFactoryReset": n => { this.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "securityRequireVerifyApps": n => { this.securityRequireVerifyApps = n.getBooleanValue(); },
            "workProfileBlockAddingAccounts": n => { this.workProfileBlockAddingAccounts = n.getBooleanValue(); },
            "workProfileBlockCamera": n => { this.workProfileBlockCamera = n.getBooleanValue(); },
            "workProfileBlockCrossProfileCallerId": n => { this.workProfileBlockCrossProfileCallerId = n.getBooleanValue(); },
            "workProfileBlockCrossProfileContactsSearch": n => { this.workProfileBlockCrossProfileContactsSearch = n.getBooleanValue(); },
            "workProfileBlockCrossProfileCopyPaste": n => { this.workProfileBlockCrossProfileCopyPaste = n.getBooleanValue(); },
            "workProfileBlockNotificationsWhileDeviceLocked": n => { this.workProfileBlockNotificationsWhileDeviceLocked = n.getBooleanValue(); },
            "workProfileBlockScreenCapture": n => { this.workProfileBlockScreenCapture = n.getBooleanValue(); },
            "workProfileBluetoothEnableContactSharing": n => { this.workProfileBluetoothEnableContactSharing = n.getBooleanValue(); },
            "workProfileDataSharingType": n => { this.workProfileDataSharingType = n.getEnumValue<AndroidWorkProfileCrossProfileDataSharingType>(AndroidWorkProfileCrossProfileDataSharingType); },
            "workProfileDefaultAppPermissionPolicy": n => { this.workProfileDefaultAppPermissionPolicy = n.getEnumValue<AndroidWorkProfileDefaultAppPermissionPolicyType>(AndroidWorkProfileDefaultAppPermissionPolicyType); },
            "workProfilePasswordBlockFingerprintUnlock": n => { this.workProfilePasswordBlockFingerprintUnlock = n.getBooleanValue(); },
            "workProfilePasswordBlockTrustAgents": n => { this.workProfilePasswordBlockTrustAgents = n.getBooleanValue(); },
            "workProfilePasswordExpirationDays": n => { this.workProfilePasswordExpirationDays = n.getNumberValue(); },
            "workProfilePasswordMinimumLength": n => { this.workProfilePasswordMinimumLength = n.getNumberValue(); },
            "workProfilePasswordMinLetterCharacters": n => { this.workProfilePasswordMinLetterCharacters = n.getNumberValue(); },
            "workProfilePasswordMinLowerCaseCharacters": n => { this.workProfilePasswordMinLowerCaseCharacters = n.getNumberValue(); },
            "workProfilePasswordMinNonLetterCharacters": n => { this.workProfilePasswordMinNonLetterCharacters = n.getNumberValue(); },
            "workProfilePasswordMinNumericCharacters": n => { this.workProfilePasswordMinNumericCharacters = n.getNumberValue(); },
            "workProfilePasswordMinSymbolCharacters": n => { this.workProfilePasswordMinSymbolCharacters = n.getNumberValue(); },
            "workProfilePasswordMinUpperCaseCharacters": n => { this.workProfilePasswordMinUpperCaseCharacters = n.getNumberValue(); },
            "workProfilePasswordMinutesOfInactivityBeforeScreenTimeout": n => { this.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "workProfilePasswordPreviousPasswordBlockCount": n => { this.workProfilePasswordPreviousPasswordBlockCount = n.getNumberValue(); },
            "workProfilePasswordRequiredType": n => { this.workProfilePasswordRequiredType = n.getEnumValue<AndroidWorkProfileRequiredPasswordType>(AndroidWorkProfileRequiredPasswordType); },
            "workProfilePasswordSignInFailureCountBeforeFactoryReset": n => { this.workProfilePasswordSignInFailureCountBeforeFactoryReset = n.getNumberValue(); },
            "workProfileRequirePassword": n => { this.workProfileRequirePassword = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the passwordBlockFingerprintUnlock property value. Indicates whether or not to block fingerprint unlock.
     * @returns a boolean
     */
    public get passwordBlockFingerprintUnlock() {
        return this._passwordBlockFingerprintUnlock;
    };
    /**
     * Sets the passwordBlockFingerprintUnlock property value. Indicates whether or not to block fingerprint unlock.
     * @param value Value to set for the passwordBlockFingerprintUnlock property.
     */
    public set passwordBlockFingerprintUnlock(value: boolean | undefined) {
        this._passwordBlockFingerprintUnlock = value;
    };
    /**
     * Gets the passwordBlockTrustAgents property value. Indicates whether or not to block Smart Lock and other trust agents.
     * @returns a boolean
     */
    public get passwordBlockTrustAgents() {
        return this._passwordBlockTrustAgents;
    };
    /**
     * Sets the passwordBlockTrustAgents property value. Indicates whether or not to block Smart Lock and other trust agents.
     * @param value Value to set for the passwordBlockTrustAgents property.
     */
    public set passwordBlockTrustAgents(value: boolean | undefined) {
        this._passwordBlockTrustAgents = value;
    };
    /**
     * Gets the passwordExpirationDays property value. Number of days before the password expires. Valid values 1 to 365
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Number of days before the password expires. Valid values 1 to 365
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        this._passwordExpirationDays = value;
    };
    /**
     * Gets the passwordMinimumLength property value. Minimum length of passwords. Valid values 4 to 16
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. Minimum length of passwords. Valid values 4 to 16
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        this._passwordMinimumLength = value;
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before the screen times out.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeScreenTimeout() {
        return this._passwordMinutesOfInactivityBeforeScreenTimeout;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before the screen times out.
     * @param value Value to set for the passwordMinutesOfInactivityBeforeScreenTimeout property.
     */
    public set passwordMinutesOfInactivityBeforeScreenTimeout(value: number | undefined) {
        this._passwordMinutesOfInactivityBeforeScreenTimeout = value;
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block. Valid values 0 to 24
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block. Valid values 0 to 24
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        this._passwordPreviousPasswordBlockCount = value;
    };
    /**
     * Gets the passwordRequiredType property value. Type of password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols.
     * @returns a androidWorkProfileRequiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. Type of password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: AndroidWorkProfileRequiredPasswordType | undefined) {
        this._passwordRequiredType = value;
    };
    /**
     * Gets the passwordSignInFailureCountBeforeFactoryReset property value. Number of sign in failures allowed before factory reset. Valid values 1 to 16
     * @returns a integer
     */
    public get passwordSignInFailureCountBeforeFactoryReset() {
        return this._passwordSignInFailureCountBeforeFactoryReset;
    };
    /**
     * Sets the passwordSignInFailureCountBeforeFactoryReset property value. Number of sign in failures allowed before factory reset. Valid values 1 to 16
     * @param value Value to set for the passwordSignInFailureCountBeforeFactoryReset property.
     */
    public set passwordSignInFailureCountBeforeFactoryReset(value: number | undefined) {
        this._passwordSignInFailureCountBeforeFactoryReset = value;
    };
    /**
     * Gets the securityRequireVerifyApps property value. Require the Android Verify apps feature is turned on.
     * @returns a boolean
     */
    public get securityRequireVerifyApps() {
        return this._securityRequireVerifyApps;
    };
    /**
     * Sets the securityRequireVerifyApps property value. Require the Android Verify apps feature is turned on.
     * @param value Value to set for the securityRequireVerifyApps property.
     */
    public set securityRequireVerifyApps(value: boolean | undefined) {
        this._securityRequireVerifyApps = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("passwordBlockFingerprintUnlock", this.passwordBlockFingerprintUnlock);
        writer.writeBooleanValue("passwordBlockTrustAgents", this.passwordBlockTrustAgents);
        writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        writer.writeEnumValue<AndroidWorkProfileRequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        writer.writeNumberValue("passwordSignInFailureCountBeforeFactoryReset", this.passwordSignInFailureCountBeforeFactoryReset);
        writer.writeBooleanValue("securityRequireVerifyApps", this.securityRequireVerifyApps);
        writer.writeBooleanValue("workProfileBlockAddingAccounts", this.workProfileBlockAddingAccounts);
        writer.writeBooleanValue("workProfileBlockCamera", this.workProfileBlockCamera);
        writer.writeBooleanValue("workProfileBlockCrossProfileCallerId", this.workProfileBlockCrossProfileCallerId);
        writer.writeBooleanValue("workProfileBlockCrossProfileContactsSearch", this.workProfileBlockCrossProfileContactsSearch);
        writer.writeBooleanValue("workProfileBlockCrossProfileCopyPaste", this.workProfileBlockCrossProfileCopyPaste);
        writer.writeBooleanValue("workProfileBlockNotificationsWhileDeviceLocked", this.workProfileBlockNotificationsWhileDeviceLocked);
        writer.writeBooleanValue("workProfileBlockScreenCapture", this.workProfileBlockScreenCapture);
        writer.writeBooleanValue("workProfileBluetoothEnableContactSharing", this.workProfileBluetoothEnableContactSharing);
        writer.writeEnumValue<AndroidWorkProfileCrossProfileDataSharingType>("workProfileDataSharingType", this.workProfileDataSharingType);
        writer.writeEnumValue<AndroidWorkProfileDefaultAppPermissionPolicyType>("workProfileDefaultAppPermissionPolicy", this.workProfileDefaultAppPermissionPolicy);
        writer.writeBooleanValue("workProfilePasswordBlockFingerprintUnlock", this.workProfilePasswordBlockFingerprintUnlock);
        writer.writeBooleanValue("workProfilePasswordBlockTrustAgents", this.workProfilePasswordBlockTrustAgents);
        writer.writeNumberValue("workProfilePasswordExpirationDays", this.workProfilePasswordExpirationDays);
        writer.writeNumberValue("workProfilePasswordMinimumLength", this.workProfilePasswordMinimumLength);
        writer.writeNumberValue("workProfilePasswordMinLetterCharacters", this.workProfilePasswordMinLetterCharacters);
        writer.writeNumberValue("workProfilePasswordMinLowerCaseCharacters", this.workProfilePasswordMinLowerCaseCharacters);
        writer.writeNumberValue("workProfilePasswordMinNonLetterCharacters", this.workProfilePasswordMinNonLetterCharacters);
        writer.writeNumberValue("workProfilePasswordMinNumericCharacters", this.workProfilePasswordMinNumericCharacters);
        writer.writeNumberValue("workProfilePasswordMinSymbolCharacters", this.workProfilePasswordMinSymbolCharacters);
        writer.writeNumberValue("workProfilePasswordMinUpperCaseCharacters", this.workProfilePasswordMinUpperCaseCharacters);
        writer.writeNumberValue("workProfilePasswordMinutesOfInactivityBeforeScreenTimeout", this.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("workProfilePasswordPreviousPasswordBlockCount", this.workProfilePasswordPreviousPasswordBlockCount);
        writer.writeEnumValue<AndroidWorkProfileRequiredPasswordType>("workProfilePasswordRequiredType", this.workProfilePasswordRequiredType);
        writer.writeNumberValue("workProfilePasswordSignInFailureCountBeforeFactoryReset", this.workProfilePasswordSignInFailureCountBeforeFactoryReset);
        writer.writeBooleanValue("workProfileRequirePassword", this.workProfileRequirePassword);
    };
    /**
     * Gets the workProfileBlockAddingAccounts property value. Block users from adding/removing accounts in work profile.
     * @returns a boolean
     */
    public get workProfileBlockAddingAccounts() {
        return this._workProfileBlockAddingAccounts;
    };
    /**
     * Sets the workProfileBlockAddingAccounts property value. Block users from adding/removing accounts in work profile.
     * @param value Value to set for the workProfileBlockAddingAccounts property.
     */
    public set workProfileBlockAddingAccounts(value: boolean | undefined) {
        this._workProfileBlockAddingAccounts = value;
    };
    /**
     * Gets the workProfileBlockCamera property value. Block work profile camera.
     * @returns a boolean
     */
    public get workProfileBlockCamera() {
        return this._workProfileBlockCamera;
    };
    /**
     * Sets the workProfileBlockCamera property value. Block work profile camera.
     * @param value Value to set for the workProfileBlockCamera property.
     */
    public set workProfileBlockCamera(value: boolean | undefined) {
        this._workProfileBlockCamera = value;
    };
    /**
     * Gets the workProfileBlockCrossProfileCallerId property value. Block display work profile caller ID in personal profile.
     * @returns a boolean
     */
    public get workProfileBlockCrossProfileCallerId() {
        return this._workProfileBlockCrossProfileCallerId;
    };
    /**
     * Sets the workProfileBlockCrossProfileCallerId property value. Block display work profile caller ID in personal profile.
     * @param value Value to set for the workProfileBlockCrossProfileCallerId property.
     */
    public set workProfileBlockCrossProfileCallerId(value: boolean | undefined) {
        this._workProfileBlockCrossProfileCallerId = value;
    };
    /**
     * Gets the workProfileBlockCrossProfileContactsSearch property value. Block work profile contacts availability in personal profile.
     * @returns a boolean
     */
    public get workProfileBlockCrossProfileContactsSearch() {
        return this._workProfileBlockCrossProfileContactsSearch;
    };
    /**
     * Sets the workProfileBlockCrossProfileContactsSearch property value. Block work profile contacts availability in personal profile.
     * @param value Value to set for the workProfileBlockCrossProfileContactsSearch property.
     */
    public set workProfileBlockCrossProfileContactsSearch(value: boolean | undefined) {
        this._workProfileBlockCrossProfileContactsSearch = value;
    };
    /**
     * Gets the workProfileBlockCrossProfileCopyPaste property value. Boolean that indicates if the setting disallow cross profile copy/paste is enabled.
     * @returns a boolean
     */
    public get workProfileBlockCrossProfileCopyPaste() {
        return this._workProfileBlockCrossProfileCopyPaste;
    };
    /**
     * Sets the workProfileBlockCrossProfileCopyPaste property value. Boolean that indicates if the setting disallow cross profile copy/paste is enabled.
     * @param value Value to set for the workProfileBlockCrossProfileCopyPaste property.
     */
    public set workProfileBlockCrossProfileCopyPaste(value: boolean | undefined) {
        this._workProfileBlockCrossProfileCopyPaste = value;
    };
    /**
     * Gets the workProfileBlockNotificationsWhileDeviceLocked property value. Indicates whether or not to block notifications while device locked.
     * @returns a boolean
     */
    public get workProfileBlockNotificationsWhileDeviceLocked() {
        return this._workProfileBlockNotificationsWhileDeviceLocked;
    };
    /**
     * Sets the workProfileBlockNotificationsWhileDeviceLocked property value. Indicates whether or not to block notifications while device locked.
     * @param value Value to set for the workProfileBlockNotificationsWhileDeviceLocked property.
     */
    public set workProfileBlockNotificationsWhileDeviceLocked(value: boolean | undefined) {
        this._workProfileBlockNotificationsWhileDeviceLocked = value;
    };
    /**
     * Gets the workProfileBlockScreenCapture property value. Block screen capture in work profile.
     * @returns a boolean
     */
    public get workProfileBlockScreenCapture() {
        return this._workProfileBlockScreenCapture;
    };
    /**
     * Sets the workProfileBlockScreenCapture property value. Block screen capture in work profile.
     * @param value Value to set for the workProfileBlockScreenCapture property.
     */
    public set workProfileBlockScreenCapture(value: boolean | undefined) {
        this._workProfileBlockScreenCapture = value;
    };
    /**
     * Gets the workProfileBluetoothEnableContactSharing property value. Allow bluetooth devices to access enterprise contacts.
     * @returns a boolean
     */
    public get workProfileBluetoothEnableContactSharing() {
        return this._workProfileBluetoothEnableContactSharing;
    };
    /**
     * Sets the workProfileBluetoothEnableContactSharing property value. Allow bluetooth devices to access enterprise contacts.
     * @param value Value to set for the workProfileBluetoothEnableContactSharing property.
     */
    public set workProfileBluetoothEnableContactSharing(value: boolean | undefined) {
        this._workProfileBluetoothEnableContactSharing = value;
    };
    /**
     * Gets the workProfileDataSharingType property value. Type of data sharing that is allowed. Possible values are: deviceDefault, preventAny, allowPersonalToWork, noRestrictions.
     * @returns a androidWorkProfileCrossProfileDataSharingType
     */
    public get workProfileDataSharingType() {
        return this._workProfileDataSharingType;
    };
    /**
     * Sets the workProfileDataSharingType property value. Type of data sharing that is allowed. Possible values are: deviceDefault, preventAny, allowPersonalToWork, noRestrictions.
     * @param value Value to set for the workProfileDataSharingType property.
     */
    public set workProfileDataSharingType(value: AndroidWorkProfileCrossProfileDataSharingType | undefined) {
        this._workProfileDataSharingType = value;
    };
    /**
     * Gets the workProfileDefaultAppPermissionPolicy property value. Type of password that is required. Possible values are: deviceDefault, prompt, autoGrant, autoDeny.
     * @returns a androidWorkProfileDefaultAppPermissionPolicyType
     */
    public get workProfileDefaultAppPermissionPolicy() {
        return this._workProfileDefaultAppPermissionPolicy;
    };
    /**
     * Sets the workProfileDefaultAppPermissionPolicy property value. Type of password that is required. Possible values are: deviceDefault, prompt, autoGrant, autoDeny.
     * @param value Value to set for the workProfileDefaultAppPermissionPolicy property.
     */
    public set workProfileDefaultAppPermissionPolicy(value: AndroidWorkProfileDefaultAppPermissionPolicyType | undefined) {
        this._workProfileDefaultAppPermissionPolicy = value;
    };
    /**
     * Gets the workProfilePasswordBlockFingerprintUnlock property value. Indicates whether or not to block fingerprint unlock for work profile.
     * @returns a boolean
     */
    public get workProfilePasswordBlockFingerprintUnlock() {
        return this._workProfilePasswordBlockFingerprintUnlock;
    };
    /**
     * Sets the workProfilePasswordBlockFingerprintUnlock property value. Indicates whether or not to block fingerprint unlock for work profile.
     * @param value Value to set for the workProfilePasswordBlockFingerprintUnlock property.
     */
    public set workProfilePasswordBlockFingerprintUnlock(value: boolean | undefined) {
        this._workProfilePasswordBlockFingerprintUnlock = value;
    };
    /**
     * Gets the workProfilePasswordBlockTrustAgents property value. Indicates whether or not to block Smart Lock and other trust agents for work profile.
     * @returns a boolean
     */
    public get workProfilePasswordBlockTrustAgents() {
        return this._workProfilePasswordBlockTrustAgents;
    };
    /**
     * Sets the workProfilePasswordBlockTrustAgents property value. Indicates whether or not to block Smart Lock and other trust agents for work profile.
     * @param value Value to set for the workProfilePasswordBlockTrustAgents property.
     */
    public set workProfilePasswordBlockTrustAgents(value: boolean | undefined) {
        this._workProfilePasswordBlockTrustAgents = value;
    };
    /**
     * Gets the workProfilePasswordExpirationDays property value. Number of days before the work profile password expires. Valid values 1 to 365
     * @returns a integer
     */
    public get workProfilePasswordExpirationDays() {
        return this._workProfilePasswordExpirationDays;
    };
    /**
     * Sets the workProfilePasswordExpirationDays property value. Number of days before the work profile password expires. Valid values 1 to 365
     * @param value Value to set for the workProfilePasswordExpirationDays property.
     */
    public set workProfilePasswordExpirationDays(value: number | undefined) {
        this._workProfilePasswordExpirationDays = value;
    };
    /**
     * Gets the workProfilePasswordMinimumLength property value. Minimum length of work profile password. Valid values 4 to 16
     * @returns a integer
     */
    public get workProfilePasswordMinimumLength() {
        return this._workProfilePasswordMinimumLength;
    };
    /**
     * Sets the workProfilePasswordMinimumLength property value. Minimum length of work profile password. Valid values 4 to 16
     * @param value Value to set for the workProfilePasswordMinimumLength property.
     */
    public set workProfilePasswordMinimumLength(value: number | undefined) {
        this._workProfilePasswordMinimumLength = value;
    };
    /**
     * Gets the workProfilePasswordMinLetterCharacters property value. Minimum # of letter characters required in work profile password. Valid values 1 to 10
     * @returns a integer
     */
    public get workProfilePasswordMinLetterCharacters() {
        return this._workProfilePasswordMinLetterCharacters;
    };
    /**
     * Sets the workProfilePasswordMinLetterCharacters property value. Minimum # of letter characters required in work profile password. Valid values 1 to 10
     * @param value Value to set for the workProfilePasswordMinLetterCharacters property.
     */
    public set workProfilePasswordMinLetterCharacters(value: number | undefined) {
        this._workProfilePasswordMinLetterCharacters = value;
    };
    /**
     * Gets the workProfilePasswordMinLowerCaseCharacters property value. Minimum # of lower-case characters required in work profile password. Valid values 1 to 10
     * @returns a integer
     */
    public get workProfilePasswordMinLowerCaseCharacters() {
        return this._workProfilePasswordMinLowerCaseCharacters;
    };
    /**
     * Sets the workProfilePasswordMinLowerCaseCharacters property value. Minimum # of lower-case characters required in work profile password. Valid values 1 to 10
     * @param value Value to set for the workProfilePasswordMinLowerCaseCharacters property.
     */
    public set workProfilePasswordMinLowerCaseCharacters(value: number | undefined) {
        this._workProfilePasswordMinLowerCaseCharacters = value;
    };
    /**
     * Gets the workProfilePasswordMinNonLetterCharacters property value. Minimum # of non-letter characters required in work profile password. Valid values 1 to 10
     * @returns a integer
     */
    public get workProfilePasswordMinNonLetterCharacters() {
        return this._workProfilePasswordMinNonLetterCharacters;
    };
    /**
     * Sets the workProfilePasswordMinNonLetterCharacters property value. Minimum # of non-letter characters required in work profile password. Valid values 1 to 10
     * @param value Value to set for the workProfilePasswordMinNonLetterCharacters property.
     */
    public set workProfilePasswordMinNonLetterCharacters(value: number | undefined) {
        this._workProfilePasswordMinNonLetterCharacters = value;
    };
    /**
     * Gets the workProfilePasswordMinNumericCharacters property value. Minimum # of numeric characters required in work profile password. Valid values 1 to 10
     * @returns a integer
     */
    public get workProfilePasswordMinNumericCharacters() {
        return this._workProfilePasswordMinNumericCharacters;
    };
    /**
     * Sets the workProfilePasswordMinNumericCharacters property value. Minimum # of numeric characters required in work profile password. Valid values 1 to 10
     * @param value Value to set for the workProfilePasswordMinNumericCharacters property.
     */
    public set workProfilePasswordMinNumericCharacters(value: number | undefined) {
        this._workProfilePasswordMinNumericCharacters = value;
    };
    /**
     * Gets the workProfilePasswordMinSymbolCharacters property value. Minimum # of symbols required in work profile password. Valid values 1 to 10
     * @returns a integer
     */
    public get workProfilePasswordMinSymbolCharacters() {
        return this._workProfilePasswordMinSymbolCharacters;
    };
    /**
     * Sets the workProfilePasswordMinSymbolCharacters property value. Minimum # of symbols required in work profile password. Valid values 1 to 10
     * @param value Value to set for the workProfilePasswordMinSymbolCharacters property.
     */
    public set workProfilePasswordMinSymbolCharacters(value: number | undefined) {
        this._workProfilePasswordMinSymbolCharacters = value;
    };
    /**
     * Gets the workProfilePasswordMinUpperCaseCharacters property value. Minimum # of upper-case characters required in work profile password. Valid values 1 to 10
     * @returns a integer
     */
    public get workProfilePasswordMinUpperCaseCharacters() {
        return this._workProfilePasswordMinUpperCaseCharacters;
    };
    /**
     * Sets the workProfilePasswordMinUpperCaseCharacters property value. Minimum # of upper-case characters required in work profile password. Valid values 1 to 10
     * @param value Value to set for the workProfilePasswordMinUpperCaseCharacters property.
     */
    public set workProfilePasswordMinUpperCaseCharacters(value: number | undefined) {
        this._workProfilePasswordMinUpperCaseCharacters = value;
    };
    /**
     * Gets the workProfilePasswordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before the screen times out.
     * @returns a integer
     */
    public get workProfilePasswordMinutesOfInactivityBeforeScreenTimeout() {
        return this._workProfilePasswordMinutesOfInactivityBeforeScreenTimeout;
    };
    /**
     * Sets the workProfilePasswordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity before the screen times out.
     * @param value Value to set for the workProfilePasswordMinutesOfInactivityBeforeScreenTimeout property.
     */
    public set workProfilePasswordMinutesOfInactivityBeforeScreenTimeout(value: number | undefined) {
        this._workProfilePasswordMinutesOfInactivityBeforeScreenTimeout = value;
    };
    /**
     * Gets the workProfilePasswordPreviousPasswordBlockCount property value. Number of previous work profile passwords to block. Valid values 0 to 24
     * @returns a integer
     */
    public get workProfilePasswordPreviousPasswordBlockCount() {
        return this._workProfilePasswordPreviousPasswordBlockCount;
    };
    /**
     * Sets the workProfilePasswordPreviousPasswordBlockCount property value. Number of previous work profile passwords to block. Valid values 0 to 24
     * @param value Value to set for the workProfilePasswordPreviousPasswordBlockCount property.
     */
    public set workProfilePasswordPreviousPasswordBlockCount(value: number | undefined) {
        this._workProfilePasswordPreviousPasswordBlockCount = value;
    };
    /**
     * Gets the workProfilePasswordRequiredType property value. Type of work profile password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols.
     * @returns a androidWorkProfileRequiredPasswordType
     */
    public get workProfilePasswordRequiredType() {
        return this._workProfilePasswordRequiredType;
    };
    /**
     * Sets the workProfilePasswordRequiredType property value. Type of work profile password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols.
     * @param value Value to set for the workProfilePasswordRequiredType property.
     */
    public set workProfilePasswordRequiredType(value: AndroidWorkProfileRequiredPasswordType | undefined) {
        this._workProfilePasswordRequiredType = value;
    };
    /**
     * Gets the workProfilePasswordSignInFailureCountBeforeFactoryReset property value. Number of sign in failures allowed before work profile is removed and all corporate data deleted. Valid values 1 to 16
     * @returns a integer
     */
    public get workProfilePasswordSignInFailureCountBeforeFactoryReset() {
        return this._workProfilePasswordSignInFailureCountBeforeFactoryReset;
    };
    /**
     * Sets the workProfilePasswordSignInFailureCountBeforeFactoryReset property value. Number of sign in failures allowed before work profile is removed and all corporate data deleted. Valid values 1 to 16
     * @param value Value to set for the workProfilePasswordSignInFailureCountBeforeFactoryReset property.
     */
    public set workProfilePasswordSignInFailureCountBeforeFactoryReset(value: number | undefined) {
        this._workProfilePasswordSignInFailureCountBeforeFactoryReset = value;
    };
    /**
     * Gets the workProfileRequirePassword property value. Password is required or not for work profile
     * @returns a boolean
     */
    public get workProfileRequirePassword() {
        return this._workProfileRequirePassword;
    };
    /**
     * Sets the workProfileRequirePassword property value. Password is required or not for work profile
     * @param value Value to set for the workProfileRequirePassword property.
     */
    public set workProfileRequirePassword(value: boolean | undefined) {
        this._workProfileRequirePassword = value;
    };
}
