import {Approval} from './approval';
import {Request} from './request';
import {Parsable} from '@microsoft/kiota-abstractions';

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
