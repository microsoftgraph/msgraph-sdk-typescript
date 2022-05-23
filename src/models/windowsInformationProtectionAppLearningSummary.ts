import {ApplicationType} from './applicationType';
import {Entity} from './entity';

export interface WindowsInformationProtectionAppLearningSummary extends Entity{
    /** Application Name */
    applicationName?:string | undefined;
    /** Application Type. Possible values are: universal, desktop. */
    applicationType?:ApplicationType | undefined;
    /** Device Count */
    deviceCount?:number | undefined;
}
