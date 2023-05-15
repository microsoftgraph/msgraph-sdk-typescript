import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLearningSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: WindowsInformationProtectionAppLearningSummary[] | undefined;
}
