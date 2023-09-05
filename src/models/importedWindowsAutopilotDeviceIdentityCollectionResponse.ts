import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ImportedWindowsAutopilotDeviceIdentity } from './importedWindowsAutopilotDeviceIdentity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
}
