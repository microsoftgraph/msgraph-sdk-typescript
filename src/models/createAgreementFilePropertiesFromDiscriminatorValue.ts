import {AgreementFileProperties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFilePropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileProperties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.agreementFileProperties":
                    return new AgreementFileProperties();
            }
        }
    }
    return new AgreementFileProperties();
}
