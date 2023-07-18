import {ManagedEBook} from './managedEBook';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface IosVppEBook extends ManagedEBook, Parsable {
    /**
     * The Apple ID associated with Vpp token.
     */
    appleId?: string | undefined;
    /**
     * Genres.
     */
    genres?: string[] | undefined;
    /**
     * Language.
     */
    language?: string | undefined;
    /**
     * Seller.
     */
    seller?: string | undefined;
    /**
     * Total license count.
     */
    totalLicenseCount?: number | undefined;
    /**
     * Used license count.
     */
    usedLicenseCount?: number | undefined;
    /**
     * The Vpp token's organization name.
     */
    vppOrganizationName?: string | undefined;
    /**
     * The Vpp token ID.
     */
    vppTokenId?: Guid | undefined;
}
