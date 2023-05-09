import {AgreementFile} from './agreementFile';
import {AgreementFileLocalization} from './agreementFileLocalization';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {serializeAgreementFileProperties} from './serializeAgreementFileProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFile(writer: SerializationWriter, agreementFile: AgreementFile | undefined = {} as AgreementFile) : void {
        serializeAgreementFileProperties(writer, agreementFile)
        writer.writeCollectionOfObjectValues<AgreementFileLocalization>("localizations", agreementFile.localizations, serializeAgreementFileLocalization);
}
