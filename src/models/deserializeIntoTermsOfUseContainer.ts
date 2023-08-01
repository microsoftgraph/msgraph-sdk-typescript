import type {Agreement} from './agreement';
import type {AgreementAcceptance} from './agreementAcceptance';
import {createAgreementAcceptanceFromDiscriminatorValue} from './createAgreementAcceptanceFromDiscriminatorValue';
import {createAgreementFromDiscriminatorValue} from './createAgreementFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAgreement} from './serializeAgreement';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import type {TermsOfUseContainer} from './termsOfUseContainer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsOfUseContainer(termsOfUseContainer: TermsOfUseContainer | undefined = {} as TermsOfUseContainer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(termsOfUseContainer),
        "agreementAcceptances": n => { termsOfUseContainer.agreementAcceptances = n.getCollectionOfObjectValues<AgreementAcceptance>(createAgreementAcceptanceFromDiscriminatorValue); },
        "agreements": n => { termsOfUseContainer.agreements = n.getCollectionOfObjectValues<Agreement>(createAgreementFromDiscriminatorValue); },
    }
}
