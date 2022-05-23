import {AppConsentRequest} from './appConsentRequest';
import {Entity} from './entity';

export interface AppConsentApprovalRoute extends Entity{
    /** A collection of userConsentRequest objects for a specific application. */
    appConsentRequests?:AppConsentRequest[] | undefined;
}
