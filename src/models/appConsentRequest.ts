import { type AppConsentRequestScope } from './appConsentRequestScope';
import { type Entity } from './entity';
import { type UserConsentRequest } from './userConsentRequest';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AppConsentRequest extends Entity, Parsable {
    /**
     * The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
     */
    appDisplayName?: string | undefined;
    /**
     * The identifier of the application. Required. Supports $filter (eq only) and $orderby.
     */
    appId?: string | undefined;
    /**
     * A list of pending scopes waiting for approval. Required.
     */
    pendingScopes?: AppConsentRequestScope[] | undefined;
    /**
     * A list of pending user consent requests. Supports $filter (eq).
     */
    userConsentRequests?: UserConsentRequest[] | undefined;
}
