import { deserializeIntoMobileAppIdentifier } from './deserializeIntoMobileAppIdentifier';
import { type IosMobileAppIdentifier } from './iosMobileAppIdentifier';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMobileAppIdentifier(iosMobileAppIdentifier: IosMobileAppIdentifier | undefined = {} as IosMobileAppIdentifier) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppIdentifier(iosMobileAppIdentifier),
        "bundleId": n => { iosMobileAppIdentifier.bundleId = n.getStringValue(); },
    }
}
