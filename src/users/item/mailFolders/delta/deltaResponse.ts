import type {BaseDeltaFunctionResponse} from '../../../../models/baseDeltaFunctionResponse';
import type {MailFolder} from '../../../../models/mailFolder';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: MailFolder[] | undefined;
}
