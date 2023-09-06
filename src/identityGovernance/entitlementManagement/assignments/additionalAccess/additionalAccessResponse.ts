import { type AccessPackageAssignment } from '../../../../models/accessPackageAssignment';
import { type BaseCollectionPaginationCountResponse } from '../../../../models/baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AdditionalAccessResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AccessPackageAssignment[] | undefined;
}
