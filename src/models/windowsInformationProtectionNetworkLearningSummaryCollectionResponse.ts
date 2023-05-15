import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WindowsInformationProtectionNetworkLearningSummary} from './windowsInformationProtectionNetworkLearningSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionNetworkLearningSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: WindowsInformationProtectionNetworkLearningSummary[] | undefined;
}
