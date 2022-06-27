import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {AppListItemImpl, DeviceConfigurationImpl} from './index';
import {MacOSGeneralDeviceConfiguration} from './macOSGeneralDeviceConfiguration';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSGeneralDeviceConfigurationImpl extends DeviceConfigurationImpl implements MacOSGeneralDeviceConfiguration {
    /** List that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant. */
    public compliantAppListType?: AppListType | undefined;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    public compliantAppsList?: AppListItem[] | undefined;
    /** An email address lacking a suffix that matches any of these strings will be considered out-of-domain. */
    public emailInDomainSuffixes?: string[] | undefined;
    /** Block simple passwords. */
    public passwordBlockSimple?: boolean | undefined;
    /** Number of days before the password expires. */
    public passwordExpirationDays?: number | undefined;
    /** Number of character sets a password must contain. Valid values 0 to 4 */
    public passwordMinimumCharacterSetCount?: number | undefined;
    /** Minimum length of passwords. */
    public passwordMinimumLength?: number | undefined;
    /** Minutes of inactivity required before a password is required. */
    public passwordMinutesOfInactivityBeforeLock?: number | undefined;
    /** Minutes of inactivity required before the screen times out. */
    public passwordMinutesOfInactivityBeforeScreenTimeout?: number | undefined;
    /** Number of previous passwords to block. */
    public passwordPreviousPasswordBlockCount?: number | undefined;
    /** Whether or not to require a password. */
    public passwordRequired?: boolean | undefined;
    /** Type of password that is required. Possible values are: deviceDefault, alphanumeric, numeric. */
    public passwordRequiredType?: RequiredPasswordType | undefined;
    /**
     * Instantiates a new MacOSGeneralDeviceConfiguration and sets the default values.
     * @param macOSGeneralDeviceConfigurationParameterValue 
     */
    public constructor(macOSGeneralDeviceConfigurationParameterValue?: MacOSGeneralDeviceConfiguration | undefined) {
        super(macOSGeneralDeviceConfigurationParameterValue);
        this.compliantAppListType = macOSGeneralDeviceConfigurationParameterValue?.compliantAppListType;
        const compliantAppsListArrValue: AppListItemImpl[] = []; macOSGeneralDeviceConfigurationParameterValue?.compliantAppsList?.forEach(element => {compliantAppsListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
        this.compliantAppsList = compliantAppsListArrValue;
        this.emailInDomainSuffixes = macOSGeneralDeviceConfigurationParameterValue?.emailInDomainSuffixes;
        this.passwordBlockSimple = macOSGeneralDeviceConfigurationParameterValue?.passwordBlockSimple;
        this.passwordExpirationDays = macOSGeneralDeviceConfigurationParameterValue?.passwordExpirationDays;
        this.passwordMinimumCharacterSetCount = macOSGeneralDeviceConfigurationParameterValue?.passwordMinimumCharacterSetCount;
        this.passwordMinimumLength = macOSGeneralDeviceConfigurationParameterValue?.passwordMinimumLength;
        this.passwordMinutesOfInactivityBeforeLock = macOSGeneralDeviceConfigurationParameterValue?.passwordMinutesOfInactivityBeforeLock;
        this.passwordMinutesOfInactivityBeforeScreenTimeout = macOSGeneralDeviceConfigurationParameterValue?.passwordMinutesOfInactivityBeforeScreenTimeout;
        this.passwordPreviousPasswordBlockCount = macOSGeneralDeviceConfigurationParameterValue?.passwordPreviousPasswordBlockCount;
        this.passwordRequired = macOSGeneralDeviceConfigurationParameterValue?.passwordRequired;
        this.passwordRequiredType = macOSGeneralDeviceConfigurationParameterValue?.passwordRequiredType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "compliantAppListType": n => { this.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
            "compliantAppsList": n => { this.compliantAppsList = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.compliantAppListType){
            writer.writeEnumValue<AppListType>("compliantAppListType", this.compliantAppListType);
        }
        if(this.compliantAppsList && this.compliantAppsList.length != 0){        const compliantAppsListArrValue: AppListItemImpl[] = []; this.compliantAppsList?.forEach(element => {compliantAppsListArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("compliantAppsList", compliantAppsListArrValue);
        }
        if(this.emailInDomainSuffixes){
            writer.writeCollectionOfPrimitiveValues<string>("emailInDomainSuffixes", this.emailInDomainSuffixes);
        }
        if(this.passwordBlockSimple){
            writer.writeBooleanValue("passwordBlockSimple", this.passwordBlockSimple);
        }
        if(this.passwordExpirationDays){
            writer.writeNumberValue("passwordExpirationDays", this.passwordExpirationDays);
        }
        if(this.passwordMinimumCharacterSetCount){
            writer.writeNumberValue("passwordMinimumCharacterSetCount", this.passwordMinimumCharacterSetCount);
        }
        if(this.passwordMinimumLength){
            writer.writeNumberValue("passwordMinimumLength", this.passwordMinimumLength);
        }
        if(this.passwordMinutesOfInactivityBeforeLock){
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", this.passwordMinutesOfInactivityBeforeLock);
        }
        if(this.passwordMinutesOfInactivityBeforeScreenTimeout){
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", this.passwordMinutesOfInactivityBeforeScreenTimeout);
        }
        if(this.passwordPreviousPasswordBlockCount){
            writer.writeNumberValue("passwordPreviousPasswordBlockCount", this.passwordPreviousPasswordBlockCount);
        }
        if(this.passwordRequired){
            writer.writeBooleanValue("passwordRequired", this.passwordRequired);
        }
        if(this.passwordRequiredType){
            writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", this.passwordRequiredType);
        }
    };
}
