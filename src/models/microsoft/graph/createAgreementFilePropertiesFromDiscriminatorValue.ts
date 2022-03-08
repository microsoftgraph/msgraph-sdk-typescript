import {AgreementFileProperties} from './agreementFileProperties';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFilePropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileProperties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileProperties();
}
