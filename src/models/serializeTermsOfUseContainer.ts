import {Agreement} from './agreement';
import {AgreementAcceptance} from './agreementAcceptance';
import {serializeAgreement} from './serializeAgreement';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeEntity} from './serializeEntity';
import {TermsOfUseContainer} from './termsOfUseContainer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsOfUseContainer(writer: SerializationWriter, termsOfUseContainer: TermsOfUseContainer | undefined = {} as TermsOfUseContainer) : void {
        serializeEntity(writer, termsOfUseContainer)
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("agreementAcceptances", termsOfUseContainer.agreementAcceptances, serializeAgreementAcceptance);
        writer.writeCollectionOfObjectValues<Agreement>("agreements", termsOfUseContainer.agreements, serializeAgreement);
}
