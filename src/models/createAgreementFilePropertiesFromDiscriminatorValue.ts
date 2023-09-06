import { deserializeIntoAgreementFile } from './deserializeIntoAgreementFile';
import { deserializeIntoAgreementFileLocalization } from './deserializeIntoAgreementFileLocalization';
import { deserializeIntoAgreementFileProperties } from './deserializeIntoAgreementFileProperties';
import { deserializeIntoAgreementFileVersion } from './deserializeIntoAgreementFileVersion';
import { type AgreementFile, type AgreementFileLocalization, type AgreementFileProperties, type AgreementFileVersion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementFilePropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.agreementFile":
                    return deserializeIntoAgreementFile;
                case "#microsoft.graph.agreementFileLocalization":
                    return deserializeIntoAgreementFileLocalization;
                case "#microsoft.graph.agreementFileVersion":
                    return deserializeIntoAgreementFileVersion;
            }
        }
    }
    return deserializeIntoAgreementFileProperties;
}
