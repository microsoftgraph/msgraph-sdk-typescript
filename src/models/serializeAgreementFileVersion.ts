import {AgreementFileVersion} from './agreementFileVersion';
import {serializeAgreementFileProperties} from './serializeAgreementFileProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileVersion(agreementFileVersion: AgreementFileVersion | undefined = {} as AgreementFileVersion, writer: SerializationWriter) : void {
        serializeAgreementFileProperties(writer, agreementFileVersion)
}
