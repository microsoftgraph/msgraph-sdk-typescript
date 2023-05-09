import {CertificationControl} from './certificationControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificationControl(writer: SerializationWriter, certificationControl: CertificationControl | undefined = {} as CertificationControl) : void {
        writer.writeStringValue("name", certificationControl.name);
        writer.writeStringValue("@odata.type", certificationControl.odataType);
        writer.writeStringValue("url", certificationControl.url);
        writer.writeAdditionalData(certificationControl.additionalData);
}
