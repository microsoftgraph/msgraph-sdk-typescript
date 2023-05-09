import {AppListItem} from './appListItem';
import {AppListType} from './appListType';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {MacOSGeneralDeviceConfiguration} from './macOSGeneralDeviceConfiguration';
import {RequiredPasswordType} from './requiredPasswordType';
import {serializeAppListItem} from './serializeAppListItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSGeneralDeviceConfiguration(macOSGeneralDeviceConfiguration: MacOSGeneralDeviceConfiguration | undefined = {} as MacOSGeneralDeviceConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(macOSGeneralDeviceConfiguration),
        "compliantAppListType": n => { macOSGeneralDeviceConfiguration.compliantAppListType = n.getEnumValue<AppListType>(AppListType); },
        "compliantAppsList": n => { macOSGeneralDeviceConfiguration.compliantAppsList = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
        "emailInDomainSuffixes": n => { macOSGeneralDeviceConfiguration.emailInDomainSuffixes = n.getCollectionOfPrimitiveValues<string>(); },
        "passwordBlockSimple": n => { macOSGeneralDeviceConfiguration.passwordBlockSimple = n.getBooleanValue(); },
        "passwordExpirationDays": n => { macOSGeneralDeviceConfiguration.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumCharacterSetCount": n => { macOSGeneralDeviceConfiguration.passwordMinimumCharacterSetCount = n.getNumberValue(); },
        "passwordMinimumLength": n => { macOSGeneralDeviceConfiguration.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeLock": n => { macOSGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { macOSGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { macOSGeneralDeviceConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { macOSGeneralDeviceConfiguration.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { macOSGeneralDeviceConfiguration.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
    }
}
