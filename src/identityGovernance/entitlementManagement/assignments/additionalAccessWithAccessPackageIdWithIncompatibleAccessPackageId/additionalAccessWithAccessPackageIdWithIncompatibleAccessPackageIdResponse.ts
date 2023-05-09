import {AccessPackageAssignment} from '../../../../models/accessPackageAssignment';
import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AccessPackageAssignment[] | undefined;
}
