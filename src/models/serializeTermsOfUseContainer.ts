import type {Agreement} from './agreement';
import type {AgreementAcceptance} from './agreementAcceptance';
import {serializeAgreement} from './serializeAgreement';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeEntity} from './serializeEntity';
import type {TermsOfUseContainer} from './termsOfUseContainer';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsOfUseContainer(writer: SerializationWriter, termsOfUseContainer: TermsOfUseContainer | undefined = {} as TermsOfUseContainer) : void {
        serializeEntity(writer, termsOfUseContainer)
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("agreementAcceptances", termsOfUseContainer.agreementAcceptances, serializeAgreementAcceptance);
        writer.writeCollectionOfObjectValues<Agreement>("agreements", termsOfUseContainer.agreements, serializeAgreement);
}
