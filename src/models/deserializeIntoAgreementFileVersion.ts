import { type AgreementFileVersion } from './agreementFileVersion';
import { deserializeIntoAgreementFileProperties } from './deserializeIntoAgreementFileProperties';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileVersion(agreementFileVersion: AgreementFileVersion | undefined = {} as AgreementFileVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAgreementFileProperties(agreementFileVersion),
    }
}
