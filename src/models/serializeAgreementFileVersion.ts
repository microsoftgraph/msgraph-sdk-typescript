import {AgreementFileVersion} from './agreementFileVersion';
import {serializeAgreementFileProperties} from './serializeAgreementFileProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileVersion(writer: SerializationWriter, agreementFileVersion: AgreementFileVersion | undefined = {} as AgreementFileVersion) : void {
        serializeAgreementFileProperties(writer, agreementFileVersion)
}
