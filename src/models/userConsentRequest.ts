import type {Approval} from './approval';
import type {Request} from './request';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserConsentRequest extends Parsable, Request {
    /**
     * Approval decisions associated with a request.
     */
    approval?: Approval | undefined;
    /**
     * The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.
     */
    reason?: string | undefined;
}
