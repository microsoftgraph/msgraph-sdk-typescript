import {ApplicationType} from './applicationType';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLearningSummary extends Entity, Partial<Parsable> {
    /** Application Name */
    applicationName?: string | undefined;
    /** Application Type. Possible values are: universal, desktop. */
    applicationType?: ApplicationType | undefined;
    /** Device Count */
    deviceCount?: number | undefined;
}
