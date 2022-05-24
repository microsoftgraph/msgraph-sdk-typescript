import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';

export interface CloudAppSecuritySessionControl extends ConditionalAccessSessionControl{
    /** Possible values are: mcasConfigured, monitorOnly, blockDownloads. To learn more about these values, Deploy Conditional Access App Control for featured apps. */
    cloudAppSecurityType?:CloudAppSecuritySessionControlType | undefined;
}
