import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {AppListItem, DeviceConfiguration} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSGeneralDeviceConfiguration extends DeviceConfiguration implements Parsable {
    /** Possible values of the compliance app list. */
    private _compliantAppListType?: AppListType | undefined;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    private _compliantAppsList?: AppListItem[] | undefined;
    /** An email address lacking a suffix that matches any of these strings will be considered out-of-domain. */
    private _emailInDomainSuffixes?: string[] | undefined;
    /** Block simple passwords. */
    private _passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. */
    private _passwordExpirationDays?: number | undefined;
    /** Number of character sets a password must contain. Valid values 0 to 4 */
    private _passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passwords. */
    private _passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity required before a password is required. */
    private _passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Minutes of inactivity required before the screen times out. */
    private _passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passwords to block. */
    private _passwordPreviousPasswordBlockCount?: number | undefined;
    /** Whether or not to require a password. */
    private _passwordRequired?: boolean | undefined;
    /** Possible values of required passwords. */
    private _passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Gets the compliantAppListType property value. Possible values of the compliance app list.
     * @returns a appListType
     */
    public get compliantAppListType() {
        return this._compliantAppListType;
    };
    /**
     * Sets the compliantAppListType property value. Possible values of the compliance app list.
     * @param value Value to set for the compliantAppListType property.
     */
    public set compliantAppListType(value: AppListType | undefined) {
        this._compliantAppListType = value;
    };
    /**
     * Gets the compliantAppsList property value. List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     * @returns a appListItem
     */
    public get compliantAppsList() {
        return this._compliantAppsList;
    };
    /**
     * Sets the compliantAppsList property value. List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements.
     * @param value Value to set for the compliantAppsList property.
     */
    public set compliantAppsList(value: AppListItem[] | undefined) {
        this._compliantAppsList = value;
    };
    /**
     * Instantiates a new MacOSGeneralDeviceConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the emailInDomainSuffixes property value. An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
     * @returns a string
     */
    public get emailInDomainSuffixes() {
        return this._emailInDomainSuffixes;
    };
    /**
     * Sets the emailInDomainSuffixes property value. An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
     * @param value Value to set for the emailInDomainSuffixes property.
     */
    public set emailInDomainSuffixes(value: string[] | undefined) {
        this._emailInDomainSuffixes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "compliantAppListType": n => { this.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
            "compliantAppsList": n => { this.compliantAppsList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
            "emailInDomainSuffixes": n => { this.emailInDomainSuffixes = n.getCollectionOfPrimitiveValues<string>(); },
            "passwordBlockSimple": n => { this.passwordBlockSimple = n.getBooleanValue(); },
            "passwordExpirationDays": n => { this.passwordExpirationDays = n.getNumberValue(); },
            "passwordMinimumCharacterSetCount": n => { this.passwordMinimumCharacterSetCount = n.getNumberValue(); },
            "passwordMinimumLength": n => { this.passwordMinimumLength = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeLock": n => { this.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
            "passwordMinutesOfInactivityBeforeScreenTimeout": n => { this.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
            "passwordPreviousPasswordBlockCount": n => { this.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
            "passwordRequired": n => { this.passwordRequired = n.getBooleanValue(); },
            "passwordRequiredType": n => { this.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        };
    };
    /**
     * Gets the passwordBlockSimple property value. Block simple passwords.
     * @returns a boolean
     */
    public get passwordBlockSimple() {
        return this._passwordBlockSimple;
    };
    /**
     * Sets the passwordBlockSimple property value. Block simple passwords.
     * @param value Value to set for the passwordBlockSimple property.
     */
    public set passwordBlockSimple(value: boolean | undefined) {
        this._passwordBlockSimple = value;
    };
    /**
     * Gets the passwordExpirationDays property value. Number of days before the password expires.
     * @returns a integer
     */
    public get passwordExpirationDays() {
        return this._passwordExpirationDays;
    };
    /**
     * Sets the passwordExpirationDays property value. Number of days before the password expires.
     * @param value Value to set for the passwordExpirationDays property.
     */
    public set passwordExpirationDays(value: number | undefined) {
        this._passwordExpirationDays = value;
    };
    /**
     * Gets the passwordMinimumCharacterSetCount property value. Number of character sets a password must contain. Valid values 0 to 4
     * @returns a integer
     */
    public get passwordMinimumCharacterSetCount() {
        return this._passwordMinimumCharacterSetCount;
    };
    /**
     * Sets the passwordMinimumCharacterSetCount property value. Number of character sets a password must contain. Valid values 0 to 4
     * @param value Value to set for the passwordMinimumCharacterSetCount property.
     */
    public set passwordMinimumCharacterSetCount(value: number | undefined) {
        this._passwordMinimumCharacterSetCount = value;
    };
    /**
     * Gets the passwordMinimumLength property value. Minimum length of passwords.
     * @returns a integer
     */
    public get passwordMinimumLength() {
        return this._passwordMinimumLength;
    };
    /**
     * Sets the passwordMinimumLength property value. Minimum length of passwords.
     * @param value Value to set for the passwordMinimumLength property.
     */
    public set passwordMinimumLength(value: number | undefined) {
        this._passwordMinimumLength = value;
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeLock property value. Minutes of inactivity required before a password is required.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeLock() {
        return this._passwordMinutesOfInactivityBeforeLock;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeLock property value. Minutes of inactivity required before a password is required.
     * @param value Value to set for the passwordMinutesOfInactivityBeforeLock property.
     */
    public set passwordMinutesOfInactivityBeforeLock(value: number | undefined) {
        this._passwordMinutesOfInactivityBeforeLock = value;
    };
    /**
     * Gets the passwordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity required before the screen times out.
     * @returns a integer
     */
    public get passwordMinutesOfInactivityBeforeScreenTimeout() {
        return this._passwordMinutesOfInactivityBeforeScreenTimeout;
    };
    /**
     * Sets the passwordMinutesOfInactivityBeforeScreenTimeout property value. Minutes of inactivity required before the screen times out.
     * @param value Value to set for the passwordMinutesOfInactivityBeforeScreenTimeout property.
     */
    public set passwordMinutesOfInactivityBeforeScreenTimeout(value: number | undefined) {
        this._passwordMinutesOfInactivityBeforeScreenTimeout = value;
    };
    /**
     * Gets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block.
     * @returns a integer
     */
    public get passwordPreviousPasswordBlockCount() {
        return this._passwordPreviousPasswordBlockCount;
    };
    /**
     * Sets the passwordPreviousPasswordBlockCount property value. Number of previous passwords to block.
     * @param value Value to set for the passwordPreviousPasswordBlockCount property.
     */
    public set passwordPreviousPasswordBlockCount(value: number | undefined) {
        this._passwordPreviousPasswordBlockCount = value;
    };
    /**
     * Gets the passwordRequired property value. Whether or not to require a password.
     * @returns a boolean
     */
    public get passwordRequired() {
        return this._passwordRequired;
    };
    /**
     * Sets the passwordRequired property value. Whether or not to require a password.
     * @param value Value to set for the passwordRequired property.
     */
    public set passwordRequired(value: boolean | undefined) {
        this._passwordRequired = value;
    };
    /**
     * Gets the passwordRequiredType property value. Possible values of required passwords.
     * @returns a requiredPasswordType
     */
    public get passwordRequiredType() {
        return this._passwordRequiredType;
    };
    /**
     * Sets the passwordRequiredType property value. Possible values of required passwords.
     * @param value Value to set for the passwordRequiredType property.
     */
    public set passwordRequiredType(value: RequiredPasswordType | undefined) {
        this._passwordRequiredType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<AppListType>("compliantAppListType", this.compliantAppListType);
        writer.writeCollectionOfObjectValues<AppListItem>("compliantAppsList", this.compliantAppsList);
        writer.writeCollectionOfPrimitiveValues<string>("emailInDomainSuffixes", this.emailInDomainSuffixes);
        writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", this.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
    };
}
