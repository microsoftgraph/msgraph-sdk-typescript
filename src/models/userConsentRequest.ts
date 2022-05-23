import {Approval} from './approval';
import {Request} from './request';

export interface UserConsentRequest extends Request{
    /** Approval decisions associated with a request. */
    approval?:Approval | undefined;
    /** The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby. */
    reason?:string | undefined;
}
