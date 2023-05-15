import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileVersion} from './agreementFileVersion';
import {serializeAgreementFileProperties} from './serializeAgreementFileProperties';
import {serializeAgreementFileVersion} from './serializeAgreementFileVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileLocalization(writer: SerializationWriter, agreementFileLocalization: AgreementFileLocalization | undefined = {} as AgreementFileLocalization) : void {
        serializeAgreementFileProperties(writer, agreementFileLocalization)
        writer.writeCollectionOfObjectValues<AgreementFileVersion>("versions", agreementFileLocalization.versions, serializeAgreementFileVersion);
}
