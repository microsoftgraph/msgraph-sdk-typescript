import {AgreementFileVersion} from './agreementFileVersion';
import {deserializeIntoAgreementFileProperties} from './deserializeIntoAgreementFileProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileVersion(agreementFileVersion: AgreementFileVersion | undefined = {} as AgreementFileVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAgreementFileProperties(agreementFileVersion),
    }
}
