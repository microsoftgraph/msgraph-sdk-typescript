import { type AgreementFileVersion } from './agreementFileVersion';
import { serializeAgreementFileProperties } from './serializeAgreementFileProperties';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAgreementFileVersion(writer: SerializationWriter, agreementFileVersion: AgreementFileVersion | undefined = {} as AgreementFileVersion) : void {
        serializeAgreementFileProperties(writer, agreementFileVersion)
}
