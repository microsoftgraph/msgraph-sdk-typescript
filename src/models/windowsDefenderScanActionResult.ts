import type {DeviceActionResult} from './deviceActionResult';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDefenderScanActionResult extends DeviceActionResult, Parsable {
    /**
     * Scan type either full scan or quick scan
     */
    scanType?: string | undefined;
}
