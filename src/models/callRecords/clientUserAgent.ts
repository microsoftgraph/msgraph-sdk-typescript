import {ClientPlatform} from './clientPlatform';
import {ProductFamily} from './productFamily';
import {UserAgent} from './userAgent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ClientUserAgent extends Parsable, UserAgent {
    /**
     * The unique identifier of the Azure AD application used by this endpoint.
     */
    azureADAppId?: string | undefined;
    /**
     * Immutable resource identifier of the Azure Communication Service associated with this endpoint based on Communication Services APIs.
     */
    communicationServiceId?: string | undefined;
    /**
     * The platform property
     */
    platform?: ClientPlatform | undefined;
    /**
     * The productFamily property
     */
    productFamily?: ProductFamily | undefined;
}
