import { type AndroidMobileAppIdentifier } from './androidMobileAppIdentifier';
import { deserializeIntoMobileAppIdentifier } from './deserializeIntoMobileAppIdentifier';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidMobileAppIdentifier(androidMobileAppIdentifier: AndroidMobileAppIdentifier | undefined = {} as AndroidMobileAppIdentifier) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppIdentifier(androidMobileAppIdentifier),
        "packageId": n => { androidMobileAppIdentifier.packageId = n.getStringValue(); },
    }
}
