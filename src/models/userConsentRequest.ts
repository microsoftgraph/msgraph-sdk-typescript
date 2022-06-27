import {Approval} from './approval';
import {Request} from './request';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserConsentRequest extends Partial<AdditionalDataHolder>, Partial<Parsable>, Request {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Approval decisions associated with a request. */
    approval?: Approval | undefined;
    /** The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby. */
    reason?: string | undefined;
}
