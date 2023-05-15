import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MicrosoftStoreForBusinessApp} from './microsoftStoreForBusinessApp';
import {MicrosoftStoreForBusinessLicenseType} from './microsoftStoreForBusinessLicenseType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftStoreForBusinessApp(microsoftStoreForBusinessApp: MicrosoftStoreForBusinessApp | undefined = {} as MicrosoftStoreForBusinessApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(microsoftStoreForBusinessApp),
        "licenseType": n => { microsoftStoreForBusinessApp.licenseType = n.getEnumValue<MicrosoftStoreForBusinessLicenseType>(MicrosoftStoreForBusinessLicenseType); },
        "packageIdentityName": n => { microsoftStoreForBusinessApp.packageIdentityName = n.getStringValue(); },
        "productKey": n => { microsoftStoreForBusinessApp.productKey = n.getStringValue(); },
        "totalLicenseCount": n => { microsoftStoreForBusinessApp.totalLicenseCount = n.getNumberValue(); },
        "usedLicenseCount": n => { microsoftStoreForBusinessApp.usedLicenseCount = n.getNumberValue(); },
    }
}
