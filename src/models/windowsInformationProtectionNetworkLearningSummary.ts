import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionNetworkLearningSummary extends Entity, Parsable {
    /**
     * Device Count
     */
    deviceCount?: number | undefined;
    /**
     * Website url
     */
    url?: string | undefined;
}
