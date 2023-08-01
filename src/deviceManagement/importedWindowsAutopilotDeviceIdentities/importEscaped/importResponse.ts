import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import type {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ImportResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
}
