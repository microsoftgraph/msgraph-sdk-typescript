import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CloudAppSecuritySessionControl extends ConditionalAccessSessionControl, Parsable {
    /**
     * Possible values are: mcasConfigured, monitorOnly, blockDownloads, unknownFutureValue. For more information, see Deploy Conditional Access App Control for featured apps.
     */
    cloudAppSecurityType?: CloudAppSecuritySessionControlType | undefined;
}
