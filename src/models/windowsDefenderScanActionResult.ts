import {DeviceActionResult} from './deviceActionResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDefenderScanActionResult extends DeviceActionResult, Parsable {
    /**
     * Scan type either full scan or quick scan
     */
    scanType?: string | undefined;
}
