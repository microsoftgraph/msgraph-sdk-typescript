import {ApplicationType} from './applicationType';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLearningSummary extends Entity, Parsable {
    /**
     * Application Name
     */
    applicationName?: string | undefined;
    /**
     * Possible types of Application
     */
    applicationType?: ApplicationType | undefined;
    /**
     * Device Count
     */
    deviceCount?: number | undefined;
}
