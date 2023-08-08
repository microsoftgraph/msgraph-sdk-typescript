import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsInformationProtectionPolicy[] | undefined;
}
