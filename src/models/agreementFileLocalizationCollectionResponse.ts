import {AgreementFileLocalization} from './agreementFileLocalization';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileLocalizationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AgreementFileLocalization[] | undefined;
}
