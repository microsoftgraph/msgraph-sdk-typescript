import {deserializeIntoMobileAppIdentifier} from './deserializeIntoMobileAppIdentifier';
import {IosMobileAppIdentifier} from './iosMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMobileAppIdentifier(iosMobileAppIdentifier: IosMobileAppIdentifier | undefined = {} as IosMobileAppIdentifier) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppIdentifier(iosMobileAppIdentifier),
        "bundleId": n => { iosMobileAppIdentifier.bundleId = n.getStringValue(); },
    }
}
