import {BaseDeltaFunctionResponse} from '../../../../../../models/baseDeltaFunctionResponse';
import {ContactFolder} from '../../../../../../models/contactFolder';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: ContactFolder[] | undefined;
}
