import {MobileAppIdentifier} from './mobileAppIdentifier';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppIdentifier(mobileAppIdentifier: MobileAppIdentifier | undefined = {} as MobileAppIdentifier) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mobileAppIdentifier.odataType = n.getStringValue(); },
    }
}
