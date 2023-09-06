import { type BaseDeltaFunctionResponse } from '../../../../../models/baseDeltaFunctionResponse';
import { type Contact } from '../../../../../models/contact';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: Contact[] | undefined;
}
