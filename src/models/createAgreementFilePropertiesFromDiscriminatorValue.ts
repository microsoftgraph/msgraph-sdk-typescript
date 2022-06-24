import {AgreementFileImpl, AgreementFileLocalizationImpl, AgreementFilePropertiesImpl, AgreementFileVersionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFilePropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFilePropertiesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.agreementFile":
                    return new AgreementFileImpl();
                case "#microsoft.graph.agreementFileLocalization":
                    return new AgreementFileLocalizationImpl();
                case "#microsoft.graph.agreementFileVersion":
                    return new AgreementFileVersionImpl();
            }
        }
    }
    return new AgreementFilePropertiesImpl();
}
