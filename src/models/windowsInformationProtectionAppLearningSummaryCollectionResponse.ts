import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WindowsInformationProtectionAppLearningSummary } from './windowsInformationProtectionAppLearningSummary';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLearningSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsInformationProtectionAppLearningSummary[] | undefined;
}
