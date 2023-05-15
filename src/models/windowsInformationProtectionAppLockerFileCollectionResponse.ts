import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLockerFileCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: WindowsInformationProtectionAppLockerFile[] | undefined;
}
