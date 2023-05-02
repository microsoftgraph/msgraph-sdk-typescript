import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MdmWindowsInformationProtectionPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: MdmWindowsInformationProtectionPolicy[] | undefined;
}
