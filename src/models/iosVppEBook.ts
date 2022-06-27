import {ManagedEBook} from './managedEBook';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppEBook extends Partial<AdditionalDataHolder>, ManagedEBook, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Apple ID associated with Vpp token. */
    appleId?: string | undefined;
    /** Genres. */
    genres?: string[] | undefined;
    /** Language. */
    language?: string | undefined;
    /** Seller. */
    seller?: string | undefined;
    /** Total license count. */
    totalLicenseCount?: number | undefined;
    /** Used license count. */
    usedLicenseCount?: number | undefined;
    /** The Vpp token's organization name. */
    vppOrganizationName?: string | undefined;
    /** The Vpp token ID. */
    vppTokenId?: string | undefined;
}
