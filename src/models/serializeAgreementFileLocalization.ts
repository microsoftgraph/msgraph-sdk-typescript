import type {AgreementFileLocalization} from './agreementFileLocalization';
import type {AgreementFileVersion} from './agreementFileVersion';
import {serializeAgreementFileProperties} from './serializeAgreementFileProperties';
import {serializeAgreementFileVersion} from './serializeAgreementFileVersion';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileLocalization(writer: SerializationWriter, agreementFileLocalization: AgreementFileLocalization | undefined = {} as AgreementFileLocalization) : void {
        serializeAgreementFileProperties(writer, agreementFileLocalization)
        writer.writeCollectionOfObjectValues<AgreementFileVersion>("versions", agreementFileLocalization.versions, serializeAgreementFileVersion);
}
