import {AppConsentRequestScope} from './appConsentRequestScope';
import {Entity} from './entity';
import {UserConsentRequest} from './userConsentRequest';

export interface AppConsentRequest extends Entity{
    /** The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby. */
    appDisplayName?:string | undefined;
    /** The identifier of the application. Required. Supports $filter (eq only) and $orderby. */
    appId?:string | undefined;
    /** A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required. */
    pendingScopes?:AppConsentRequestScope[] | undefined;
    /** A list of pending user consent requests. */
    userConsentRequests?:UserConsentRequest[] | undefined;
}
