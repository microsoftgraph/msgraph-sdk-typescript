import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type MdmWindowsInformationProtectionPolicy } from './mdmWindowsInformationProtectionPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MdmWindowsInformationProtectionPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MdmWindowsInformationProtectionPolicy[] | undefined;
}
