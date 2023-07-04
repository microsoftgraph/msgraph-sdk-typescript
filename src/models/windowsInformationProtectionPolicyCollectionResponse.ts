import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsInformationProtectionPolicy[] | undefined;
}
