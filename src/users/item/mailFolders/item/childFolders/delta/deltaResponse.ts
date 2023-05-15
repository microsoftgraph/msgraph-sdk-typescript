import {BaseDeltaFunctionResponse} from '../../../../../../models/baseDeltaFunctionResponse';
import {MailFolder} from '../../../../../../models/mailFolder';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: MailFolder[] | undefined;
}
