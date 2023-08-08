import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLockerFileCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsInformationProtectionAppLockerFile[] | undefined;
}
