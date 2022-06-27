import {ClientPlatform} from './clientPlatform';
import {ProductFamily} from './productFamily';
import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ClientUserAgent extends Partial<AdditionalDataHolder>, Partial<Parsable>, UserAgent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Identifies the platform used by this endpoint. Possible values are: unknown, windows, macOS, iOS, android, web, ipPhone, roomSystem, surfaceHub, holoLens, unknownFutureValue. */
    platform?: ClientPlatform | undefined;
    /** Identifies the family of application software used by this endpoint. Possible values are: unknown, teams, skypeForBusiness, lync, unknownFutureValue, azureCommunicationServices.  Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: azureCommunicationServices. */
    productFamily?: ProductFamily | undefined;
}
