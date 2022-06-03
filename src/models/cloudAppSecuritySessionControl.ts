import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CloudAppSecuritySessionControl extends ConditionalAccessSessionControl, Partial<Parsable> {
    /** Possible values are: mcasConfigured, monitorOnly, blockDownloads. To learn more about these values, Deploy Conditional Access App Control for featured apps. */
    cloudAppSecurityType?: CloudAppSecuritySessionControlType | undefined;
}
