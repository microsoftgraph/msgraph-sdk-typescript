import {AccessPackageQuestion} from './accessPackageQuestion';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageQuestionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageQuestion[] | undefined;
}
