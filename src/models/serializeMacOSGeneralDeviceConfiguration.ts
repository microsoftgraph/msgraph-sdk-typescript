import { type AppListItem } from './appListItem';
import { AppListType } from './appListType';
import { type MacOSGeneralDeviceConfiguration } from './macOSGeneralDeviceConfiguration';
import { RequiredPasswordType } from './requiredPasswordType';
import { serializeAppListItem } from './serializeAppListItem';
import { serializeDeviceConfiguration } from './serializeDeviceConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSGeneralDeviceConfiguration(writer: SerializationWriter, macOSGeneralDeviceConfiguration: MacOSGeneralDeviceConfiguration | undefined = {} as MacOSGeneralDeviceConfiguration) : void {
        serializeDeviceConfiguration(writer, macOSGeneralDeviceConfiguration)
        writer.writeEnumValue<AppListType>("compliantAppListType", macOSGeneralDeviceConfiguration.compliantAppListType);
        writer.writeCollectionOfObjectValues<AppListItem>("compliantAppsList", macOSGeneralDeviceConfiguration.compliantAppsList, serializeAppListItem);
        writer.writeCollectionOfPrimitiveValues<string>("emailInDomainSuffixes", macOSGeneralDeviceConfiguration.emailInDomainSuffixes);
        writer.writeBooleanValue("passwordBlockSimple", macOSGeneralDeviceConfiguration.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", macOSGeneralDeviceConfiguration.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", macOSGeneralDeviceConfiguration.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", macOSGeneralDeviceConfiguration.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", macOSGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeScreenTimeout", macOSGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", macOSGeneralDeviceConfiguration.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", macOSGeneralDeviceConfiguration.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", macOSGeneralDeviceConfiguration.passwordRequiredType);
}
