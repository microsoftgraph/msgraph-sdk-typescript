import {TermsExpiration} from './termsExpiration';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsExpiration(writer: SerializationWriter, termsExpiration: TermsExpiration | undefined = {} as TermsExpiration) : void {
        writer.writeDurationValue("frequency", termsExpiration.frequency);
        writer.writeStringValue("@odata.type", termsExpiration.odataType);
        writer.writeDateValue("startDateTime", termsExpiration.startDateTime);
        writer.writeAdditionalData(termsExpiration.additionalData);
}
