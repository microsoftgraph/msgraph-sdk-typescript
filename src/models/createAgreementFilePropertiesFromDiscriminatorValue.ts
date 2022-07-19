import {AgreementFile, AgreementFileLocalization, AgreementFileProperties, AgreementFileVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFilePropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileProperties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.agreementFile":
                    return new AgreementFile();
                case "#microsoft.graph.agreementFileLocalization":
                    return new AgreementFileLocalization();
                case "#microsoft.graph.agreementFileVersion":
                    return new AgreementFileVersion();
            }
        }
    }
    return new AgreementFileProperties();
}
