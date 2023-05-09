import {MobileAppIdentifier} from './mobileAppIdentifier';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppIdentifier(writer: SerializationWriter, mobileAppIdentifier: MobileAppIdentifier | undefined = {} as MobileAppIdentifier) : void {
        writer.writeStringValue("@odata.type", mobileAppIdentifier.odataType);
        writer.writeAdditionalData(mobileAppIdentifier.additionalData);
}
