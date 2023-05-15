import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
}
