import {AgreementFileProperties} from './agreementFileProperties';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileVersion extends AgreementFileProperties, Partial<Parsable> {
}
