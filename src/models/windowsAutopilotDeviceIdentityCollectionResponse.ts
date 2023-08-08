import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsAutopilotDeviceIdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsAutopilotDeviceIdentity[] | undefined;
}
