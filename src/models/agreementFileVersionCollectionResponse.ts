import {AgreementFileVersion} from './agreementFileVersion';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AgreementFileVersion[] | undefined;
}
