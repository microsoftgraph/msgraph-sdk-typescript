import {BaseDeltaFunctionResponse} from '../../../../../../models/baseDeltaFunctionResponse';
import {Contact} from '../../../../../../models/contact';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: Contact[] | undefined;
}
