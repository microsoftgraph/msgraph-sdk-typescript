import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CloudAppSecuritySessionControl extends Partial<AdditionalDataHolder>, ConditionalAccessSessionControl, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Possible values are: mcasConfigured, monitorOnly, blockDownloads. To learn more about these values, Deploy Conditional Access App Control for featured apps. */
    cloudAppSecurityType?: CloudAppSecuritySessionControlType | undefined;
}
