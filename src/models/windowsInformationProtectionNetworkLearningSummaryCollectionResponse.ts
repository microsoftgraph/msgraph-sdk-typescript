import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WindowsInformationProtectionNetworkLearningSummary } from './windowsInformationProtectionNetworkLearningSummary';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionNetworkLearningSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsInformationProtectionNetworkLearningSummary[] | undefined;
}
