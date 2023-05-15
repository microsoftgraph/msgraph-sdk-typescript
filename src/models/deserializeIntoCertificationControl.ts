import {CertificationControl} from './certificationControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificationControl(certificationControl: CertificationControl | undefined = {} as CertificationControl) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { certificationControl.name = n.getStringValue(); },
        "@odata.type": n => { certificationControl.odataType = n.getStringValue(); },
        "url": n => { certificationControl.url = n.getStringValue(); },
    }
}
